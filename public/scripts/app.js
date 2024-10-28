window.onload = async () => {
  const productsInOnePage = 5; // Number of products to display on each page

  try {
    createSelectMenuContainer()

    createPaginationContainer(); // Initialize the container for pagination
    // Create pagination based on the number of pages
    createPageSelector(
      await calculateNumberOfPages(productsInOnePage),
      productsInOnePage
    );
    createProductListContainer(); // Initialize the container for product list
    fillProductList(productsInOnePage); // Fill the product list for the first page
  } catch (error) {
    console.error(error);
  }
};
