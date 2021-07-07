import './sass/main.scss';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStart : document.querySelector('.js-button-start'),
    btnStop :document.querySelector('.js-button-stop'),
   
}

let intervalId = null;

refs.btnStart.addEventListener('click', toggleColor);
refs.btnStop.addEventListener('click', stopColor);

function toggleColor () {
  intervalId = setInterval(() => {document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]}, 1000)
 refs.btnStart.disabled = true;
}

function stopColor(){
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}

