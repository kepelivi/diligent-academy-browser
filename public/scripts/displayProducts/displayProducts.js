async function displayProducts() {
  try {
    // Create pagination based on the number of pages
    createPageSelector(await calculateNumberOfPages());
    // Fill the product list for the first page
    fillProductList(); 
  } catch (error) {
    console.error(error);
  }
}
