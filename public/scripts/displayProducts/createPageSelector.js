// Creates and initializes the pagination container element
function createPaginationContainer() {
  const paginationContainer = document.createElement("div");
  paginationContainer.id = "paginationContainer";
  document.getElementById("main").appendChild(paginationContainer);
}

// Dynamically generates page selectors for pagination based on the number of pages
function createPageSelector(numberOfPages) {
  const container = document.querySelector("#paginationContainer");
  container.innerHTML = "";
  for (let i = 1; i <= numberOfPages; i++) {
    const page = document.createElement("span");
    page.innerHTML = i;
    page.style.padding = "5px";
    page.style.cursor = "pointer";
    page.addEventListener("click", () => fillProductList(i));
    container.appendChild(page);
  }
  document.getElementById("main").appendChild(container);
}

// Calculates the total number of pages based on the total number of products and items per page
async function calculateNumberOfPages() {
  const localUrl = url + `?limit=0&select=id`;
  try {
    const { total } = await getData(localUrl);
    const numberOfProducts = total;
    let pages;
    if (numberOfProducts % productsInOnePage !== 0) {
      pages = Math.floor(numberOfProducts / productsInOnePage) + 1;
    } else {
      pages = numberOfProducts / productsInOnePage;
    }
    return pages;
  } catch (error) {
    console.error(error);
  }
}
