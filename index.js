const containerEl = document.querySelector('.container');
const btnRatingContainer = document.querySelector('.btn-rating-container');
const ratingBtns = document.querySelectorAll('.rating-btn');
const thankYouContainerEl = document.querySelector('.thank-you-container');
const submitBtn = document.querySelector('.submit-btn');
const selectedRatingEl = document.querySelector('.selected-rating');

btnRatingContainer.addEventListener('click', (event) => {
  // Get the clicked button
  const button = event.target;

  // Remove the active class from all buttons
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
});
