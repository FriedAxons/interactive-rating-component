const selectedRating = document.querySelector('.selected-rating');

let button = null;

const btnRatingContainer = document.querySelector('.btn-rating-container');
btnRatingContainer.addEventListener('click', (event) => {
  //   Get the clicked button
  button = event.target;

  //   Remove the active class from all buttons
  const ratingBtns = document.querySelectorAll('.rating-btn');
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
});

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (event) => {
  // Prevent the form from being submitted
  event.preventDefault();

  const container = document.querySelector('.container');
  container.classList.add('active');

  const thankYouContainer = document.querySelector('.thank-you-container');
  thankYouContainer.classList.remove('active');

  selectedRating.textContent = `You selected ${
    button === null ? '0' : button.textContent
  } out of 5`;
});
