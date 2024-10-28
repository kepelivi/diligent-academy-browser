async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    
    //! TODO remove the console.log
    console.log(data);
    
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
