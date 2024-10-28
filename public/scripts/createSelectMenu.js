function createSelectMenuContainer() {
  const selectMenuContainer = document.createElement("div");
  selectMenuContainer.id = "selectMenuContainer";
  document.getElementById("main").appendChild(selectMenuContainer);
  fillSelectMenu();
}

async function fillSelectMenu() {
  const allProductsCategoryUrl = "https://dummyjson.com/products/categories";
  const allCategories = await getData(allProductsCategoryUrl);

  const container = document.querySelector("#selectMenuContainer");
  const select = document.createElement("select");
  const defCategory = document.createElement("option");
  defCategory.innerHTML = "Select category";
  defCategory.value = "";
  defCategory.addEventListener("change", (e) => categorySelect(e.target.value));
  select.appendChild(defCategory);

  allCategories.map((category) => {
    const option = document.createElement("option");
    option.innerHTML = category.name;
    option.value = category.slug;
    select.appendChild(option);
  });
  select.addEventListener("change", (e) => categorySelect(e.target.value));

  container.appendChild(select);
}

function categorySelect(category) {
  if (category === "") {
    url = urlForAllProducts;
  } else {
    url = urlForCategory + category;
  }
  displayProducts();
}
