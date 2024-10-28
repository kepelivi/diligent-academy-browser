function createSearchBarContainer() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.id = "searchBarContainer";
  document.getElementById("main").appendChild(searchBarContainer);
  fillSearchBar();
}

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

function search() {
  const { value } = document.querySelector("#searchInputField");
  url = urlForSearach + `?q=${value}`
  displayProducts()
}
