// Creates and initializes the container for displaying the product list
function createProductListContainer() {
  const productListContainer = document.createElement("div");
  productListContainer.id = "productListContainer";
  document.getElementById("main").appendChild(productListContainer);
}

// Fills the product list container with product items based on the current page
async function fillProductList(page = 0) {
  try {
    const url = getProductUrl(page);
    const { products } = await getData(url);
    const productListContainer = document.querySelector("#productListContainer");
    productListContainer.innerHTML = "";
    products.map((product) => {
      productListContainer.appendChild(createProduct(product));
    });
    document.getElementById("main").appendChild(productListContainer);
  } catch (error) {
    console.error(error);
  }
}

// Generates the URL for fetching products based on the selected page and search filters
function getProductUrl(page) {
  const skip = productsInOnePage * (page - 1);
  const select = "id,images,title,description,price,rating,tags";
  if (url.includes("?q=")) return url;
  return (
    url +
    `?limit=${productsInOnePage}&skip=${skip}&select=${select}`
  );
}

// Creates and returns a DOM element representing a single product, including image, title, description, and price
function createProduct(product) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = product.images[0];
  img.width = 250;
  img.height = 250;
  const title = document.createElement("h3");
  title.innerHTML = product.title;
  const desc = document.createElement("p");
  desc.innerHTML = product.description;
  const price = document.createElement("p");
  price.innerHTML = `Price: ${product.price}$`;
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(price);
  return div;
}
