const productsInOnePage = 5; 
const urlForSearach = "https://dummyjson.com/products/search";
const urlForCategory = "https://dummyjson.com/products/category/";
const urlForAllProducts = "https://dummyjson.com/products";
let url = urlForAllProducts;

window.onload = () => {
  createSelectMenuContainer();
  createPaginationContainer(); // Initialize the container for pagination
  createProductListContainer(); // Initialize the container for product list
  displayProducts();
};
