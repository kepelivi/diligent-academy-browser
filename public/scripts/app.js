window.onload = async () => {
  const allIdUrl = "https://dummyjson.com/products?limit=0&select=id";
  const productsInOnePage = 5; // Number of products to display on each page

  try {
    const ids = await getData(allIdUrl); // Fetch all product IDs
    createPaginationContainer(); // Initialize the container for pagination
    // Create pagination based on the number of pages
    createPageSelector(
      calculateNumberOfPages(ids, productsInOnePage),
      productsInOnePage
    );
    createProductListContainer(); // Initialize the container for product list
    fillProductList(productsInOnePage); // Fill the product list for the first page
  } catch (error) {
    console.error(error);
  }
};
