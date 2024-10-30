function createReview(review) {
    const div = document.createElement('div');
    
    const reviewerName = document.createElement('h3');
    reviewerName.innerHTML = review.reviewerName;

    const rating = document.createElement('p');
    rating.innerHTML = `Rated ${review.rating} ☆`;

    const blockQuote = document.createElement('blockquote');
    const comment = document.createElement('p');
    comment.innerHTML = `${review.comment}`;
    const email = document.createElement('footer');
    email.innerHTML = `${review.reviewerEmail}`;

    blockQuote.appendChild(comment);
    blockQuote.appendChild(email);

    const formattedDate = formatDate(review.date);
    const date = document.createElement('time');
    date.dateTime = `${review.date}`;
    date.innerHTML = `${formattedDate}`;

    div.appendChild(reviewerName);
    div.appendChild(rating);
    div.appendChild(blockQuote);
    div.appendChild(date);

    return div;
}

function displayReviews(product) {
    const reviews = document.createElement('div');
    reviews.id = 'reviewsContainer';
    product.reviews.map((review) => {
        reviews.appendChild(createReview(review));
    })
    return reviews;
}