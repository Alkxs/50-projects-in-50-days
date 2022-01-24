const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.search');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
