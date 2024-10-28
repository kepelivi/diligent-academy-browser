async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    const products = data.products;
    console.log(products);
    return products;
  } catch (error) {
    console.error(error.message);
  }
}
