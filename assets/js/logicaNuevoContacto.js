const form = document.querySelector('.form');
const showFormButton = document.getElementById('show-form');
const overlay = document.querySelector('.overlay');

showFormButton.addEventListener('click', () => {
  form.style.display = 'block';
  overlay.style.display = 'block';
});