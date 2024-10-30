function errorDisplay(message = "Error occured.") {
    const div = document.createElement('div');

    const title = document.createElement('h2');
    title.innerHTML = "Oops! Something went wrong";

    const description = document.createElement('p');
    description.innerHTML = message;

    div.appendChild(title);
    div.appendChild(description);

    return div;
}