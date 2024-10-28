function createPaginationContainer() {
  const paginationContainer = document.createElement("div");
  paginationContainer.id = "paginationContainer";
  document.getElementById("main").appendChild(paginationContainer);
}

function createPageSelector(numberOfPages,productsInOnePage) {
  const container = document.querySelector("#paginationContainer");
  container.innerHTML = "";
  for (let i = 1; i <= numberOfPages; i++) {
    const page = document.createElement("span");
    page.innerHTML = i;
    page.style.padding = "5px";
    page.addEventListener("click", () => fillProductList(productsInOnePage, i));
    container.appendChild(page);
  }
  document.getElementById("main").appendChild(container);
}

async function calculateNumberOfPages(
  numberOfProductsInOnePage,
  url = "https://dummyjson.com/products?limit=0&select=id"
) {
  try {
    const products = await getData(url);
    const numberOfProducts = products.length;
    let pages;
    if (numberOfProducts % numberOfProductsInOnePage !== 0) {
      pages = Math.floor(numberOfProducts / numberOfProductsInOnePage) + 1;
    } else {
      pages = numberOfProducts / numberOfProductsInOnePage;
    }
    return pages;
  } catch (error) {
    console.error(error);
  }
}
