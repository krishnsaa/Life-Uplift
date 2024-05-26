

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    this.reset();
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('reviewName').value;
    const review = document.getElementById('review').value;

    if (name && review) {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');

        const reviewerName = document.createElement('h4');
        reviewerName.textContent = name;

        const reviewerText = document.createElement('p');
        reviewerText.textContent = review;

        reviewContainer.appendChild(reviewerName);
        reviewContainer.appendChild(reviewerText);

        document.getElementById('reviewsContainer').appendChild(reviewContainer);

        alert('Thank you for your review!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});