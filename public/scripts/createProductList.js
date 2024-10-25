function createProductList(products) {
  const productListDiv = document.createElement("div");

  products.map((product) => {
    productListDiv.appendChild(createProduct(product));
  });

  document.getElementById("main").appendChild(productListDiv);
}

function createProduct(product) {
  const div = document.createElement("div");

  const img = document.createElement("img");
  console.log(product.images[0]);
  img.src = `${product.images[0]}`;
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
