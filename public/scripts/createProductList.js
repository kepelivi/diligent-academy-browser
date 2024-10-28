function createProductListContainer() {
  const productListContainer = document.createElement("div");
  productListContainer.id = "productListContainer";
  document.getElementById("main").appendChild(productListContainer);
}

async function fillProductList(productsInOnePage, page = 0) {
  try {
    const products = await getData(getProductUrl(productsInOnePage, page));
    const productListContainer = document.querySelector(
      "#productListContainer"
    );
    productListContainer.innerHTML = "";
    products.map((product) => {
      productListContainer.appendChild(createProduct(product));
    });
    document.getElementById("main").appendChild(productListContainer);
  } catch (error) {
    console.error(error);
  }
}

function getProductUrl(numberOfProductsInOnePage, page) {
  const skip = numberOfProductsInOnePage * (page - 1);
  return `https://dummyjson.com/products?limit=${numberOfProductsInOnePage}&skip=${skip}&select=id,images,title,description,price,rating,tags`;
}

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
