import {
  ASYNC_INC,
  DEC, INC, THEME
} from './types';

import { combineReducers } from 'redux';

const counterReducer = (state = { counter: 0, disabled: false }, action = {}) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: ++state.counter
      };
    case DEC:
      return {
        ...state,
        counter: --state.counter
      };
    case ASYNC_INC:
      return {
        ...state,
        counter: ++state.counter
      };
    case 'DISABLED':
      return {
        ...state,
        disabled: !state.disabled
      };
    default:
      return state;
  }
};

const themeReducer = (state = { theme: 'light'}, action = {}) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counterReducer,
  themeReducer
});








// export const combineReducer = (...rest) => {
//   return rest.reduce((acc, el) => {
//     return {
//       ...acc,
//       ...el()
//     };
//   }, {})
// };