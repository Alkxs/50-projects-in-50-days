const imgs = document.querySelector('.image-container');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

// let interval = setInterval(run, 4000);

// function run() {
//   idx++;

//   changeImage();
// }

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

btnRight.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

btnLeft.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
