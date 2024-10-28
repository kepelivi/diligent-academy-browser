// Creates and initializes the select menu container, then populates it with category options
function createSelectMenuContainer() {
  const selectMenuContainer = document.createElement("div");
  selectMenuContainer.id = "selectMenuContainer";
  document.getElementById("main").appendChild(selectMenuContainer);
  fillSelectMenu();
}

// Fetches all product categories and populates the select menu with options for each category
async function fillSelectMenu() {
  // API endpoint for retrieving all product categories
  const allProductsCategoryUrl = "https://dummyjson.com/products/categories";
  const allCategories = await getData(allProductsCategoryUrl);

  // Select menu container
  const container = document.querySelector("#selectMenuContainer");
  const select = document.createElement("select");
  
  // Default "Select category" option
  const defCategory = document.createElement("option");
  defCategory.innerHTML = "Select category";
  defCategory.value = "";
  defCategory.addEventListener("change", (e) => categorySelect(e.target.value));
  select.appendChild(defCategory);

  // Populate select menu with categories retrieved from the API
  allCategories.map((category) => {
    const option = document.createElement("option");
    option.innerHTML = category.name; // Set visible name of the category
    option.value = category.slug;     // Set value for filtering by category
    select.appendChild(option);
  });

  // Add an event listener to detect category selection changes
  select.addEventListener("change", (e) => categorySelect(e.target.value));

  // Append the completed select menu to the container
  container.appendChild(select);
}


// Updates the URL based on the selected category and displays the filtered products
function categorySelect(category) {
  if (category === "") {
    url = urlForAllProducts;
  } else {
    url = urlForCategory + category;
  }
  displayProducts();
}
