function createProductListContainer() {
  const productListContainer = document.createElement("div");
  productListContainer.id = "productListContainer";
  document.getElementById("main").appendChild(productListContainer);
}

async function fillProductList(page = 0, param = "") {
  try {
    const url = getProductUrl(page, param);
    const { products } = await getData(url);
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

function getProductUrl(page, param) {
  const skip = productsInOnePage * (page - 1);
  const select = "id,images,title,description,price,rating,tags";

  return (
    url +
    `?limit=${productsInOnePage}&skip=${skip}&select=${select}&q=${param}`
  );
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
