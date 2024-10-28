// Creates and initializes the search bar container, then populates it with input and button elements
function createSearchBarContainer() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.id = "searchBarContainer";
  document.getElementById("main").appendChild(searchBarContainer);
  fillSearchBar();
}

// Adds a search input field and button to the search bar container
function fillSearchBar() {
  const container = document.querySelector("#searchBarContainer");
  const inputField = document.createElement("input");
  inputField.id = "searchInputField";
  const searchButton = document.createElement("button");
  searchButton.innerHTML = "Search";
  searchButton.addEventListener("click", search);
  container.appendChild(inputField);
  container.appendChild(searchButton);
}

// Executes a search based on the input value, updates the URL, and displays the filtered products
function search() {
  const { value } = document.querySelector("#searchInputField");
  url = urlForSearach + `?q=${value}`;
  displayProducts();
}
