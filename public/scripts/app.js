const productsInOnePage = 5; 
const urlForSearach = "https://dummyjson.com/products/search";
const urlForCategory = "https://dummyjson.com/products/category/";
const urlForAllProducts = "https://dummyjson.com/products";
let url = urlForAllProducts;

window.onload = () => {
  createSelectMenuContainer(); // Initialize the select menu container
  createSearchBarContainer(); // Initialize the search bar container
  createPaginationContainer(); // Initialize pagination container
  createProductListContainer(); // Initialize product list container
  displayProducts(); // Display products on the page
};
