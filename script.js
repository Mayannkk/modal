'use strict';

// making variables for every code that will reuse again nd again.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// function for opening the modal window by clicking button.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function for closing the modal window by clicking button or overlay.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop for all three buttons clicking.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

// To close modal window by clicking either cross or overlay.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// To close modal window by clicking esc key from keybord.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); //had to call function here.
});
