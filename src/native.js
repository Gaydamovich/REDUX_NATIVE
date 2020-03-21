import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let state = 0;

addBtn.addEventListener('click', () => {
  state++;
  renderCounter();
});

subBtn.addEventListener('click', () => {
  state--;
  renderCounter();
});

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    state++;
    renderCounter()
  }, 1000);
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function renderCounter() {
  console.log('render');
  counter.innerText = state.toString();
}

renderCounter();