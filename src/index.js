import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { asyncInc, decrement, increment } from './redux/actions';
import thunk from 'redux-thunk';
import './styles.css';
import { logger } from './redux/middleware';
import { THEME } from './redux/types';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  counter.textContent = store.getState().counterReducer.counter;
  document.body.className = store.getState().themeReducer.theme;
  if (store.getState().counterReducer.disabled) {
    addBtn.setAttribute('disabled', '');
    subBtn.setAttribute('disabled', '');
  } else {
    addBtn.removeAttribute('disabled');
    subBtn.removeAttribute('disabled');
  }
});

store.dispatch({type: 'test'});

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncInc())
});

themeBtn.addEventListener('click', () => {
  store.dispatch({ type: THEME })
});