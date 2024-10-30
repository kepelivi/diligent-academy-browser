function createProductDetailsContainer() {
    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.id = "productDetailsContainer";
    document.getElementById("main").appendChild(productDetailsContainer);
}

async function displayProductDetails() {
    const product = await getProduct();
    console.log(`current product: ${product}`)
    if (!product) {
        const error = errorDisplay("Error occured while displaying this product. Please refresh or go back to the main page.")
        document.getElementById("main").appendChild(error);
    }

    const container = document.querySelector('#productDetailsContainer');
    const productDiv = createProductWithDetails(product);
    container.appendChild(productDiv);
}

function getProductId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('productId');

    return productId;
}

async function getProduct() {
    try {
        const id = getProductId();
        const url = `https://dummyjson.com/products/${id}`;
        console.log(url);
        const product = await getData(url);
        return product;
    } catch (err) {
        console.error(err);
    }
}

function createProductWithDetails(product) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = product.images[0];
    img.width = 250;
    img.height = 250;

    const title = document.createElement("h3");
    title.innerHTML = product.title;

    const desc = document.createElement("p");
    desc.innerHTML = product.description;

    const price = document.createElement("p");
    price.innerHTML = `Price: ${product.price}$`;

    const rating = document.createElement("p");
    rating.innerHTML = `Rating: ${product.rating} ☆`;

    const stock = document.createElement("p");
    stock.innerHTML = `In stock: ${product.stock} left`;

    const tags = document.createElement("p");
    tags.innerHTML = `Tags: ${product.tags}`;

    const brand = document.createElement("p");
    brand.innerHTML = `Made by ${product.brand}`;

    const reviews = displayReviews(product);

    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(desc);
    div.appendChild(price);
    div.appendChild(rating);
    div.appendChild(stock);
    div.appendChild(tags);
    div.appendChild(brand);
    div.appendChild(reviews);
    
    return div;
}