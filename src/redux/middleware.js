export const logger = ({ getState }) => {
  return next => {
    return action => {
      console.log(getState(), action);
      return next(action)
    }
  }
};