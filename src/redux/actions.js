import {INC, DEC, ASYNC_INC } from './types';

export const increment = () => ({ type: INC });
export const decrement = () => ({ type: DEC });
export const disBtn = () => ({ type: 'DISABLED'});
export const asyncInc = () => {
  return dispatch => {
    dispatch(disBtn());
    setTimeout(() => {
      dispatch({ type: ASYNC_INC });
      dispatch(disBtn());
    }, 1000);
  }
};