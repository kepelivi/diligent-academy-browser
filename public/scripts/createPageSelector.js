function createPaginationContainer() {
  const paginationContainer = document.createElement("div");
  paginationContainer.id = "paginationContainer";
  document.getElementById("main").appendChild(paginationContainer);
}

function createPageSelector(numberOfPages, productsInOnePage) {
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

function calculateNumberOfPages(productIds, numberOfProductsInOnePage) {
  const numberOfProducts = productIds.length;
  let pages;
  if (numberOfProducts % numberOfProductsInOnePage !== 0) {
    pages = Math.floor(numberOfProducts / numberOfProductsInOnePage) + 1;
  } else {
    pages = numberOfProducts / numberOfProductsInOnePage;
  }
  return pages;
}