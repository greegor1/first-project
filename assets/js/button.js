const button = document.getElementById('nav-button');
const list = document.querySelector('.js-nav-list');
const submit = document.querySelector('.inputarea')
const error = document.querySelector('.inputarea__error')

button.addEventListener('click', function (event) {
    list.classList.toggle("nav-bar__active");
});

const header = document.querySelector('.js-header');

window.addEventListener('scroll', function (event) {
  if (window.pageYOffset > 400) {
    header.classList.add("sticky");
    // header.style.backgroundColor = 'red';
  }
  else {
    header.classList.remove("sticky");
    header.style.backgroundColor = '';
  }
})

$(document).ready(function(){
  console.log("siemano2");
  $('.carousel').slick({
        arrows: false,
        dots: true
      });
});

submit.addEventListener('submit', function (event) {
  event.preventDefault();

  const target = event.target;
  const targetValue = document.querySelector('input').value;

  console.log(targetValue);

  if (targetValue != 'ok') {
    error.classList.add("js-show-error");
  }
  else {
    error.classList.remove("js-show-error");
  }
})
