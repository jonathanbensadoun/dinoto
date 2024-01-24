import { updateData } from './dinoSlice';

const callApiMiddlewares = (store) => (next) => (action) => {
  if (action.type === 'GET_RECIPES_FROM_API') {
    console.log('Declancher le call API');
    fetch('http://dinotoapi.com/api/dinosaures/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const dataAction = updateData(data.data);
        store.dispatch(dataAction);
      });
  }

  // Call the next middleware or the reducer in the chain
  return next(action);
};

export default callApiMiddlewares;
