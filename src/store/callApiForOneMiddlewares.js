// import { updateData } from './dinoSlice';

// const callApiForOneMiddlewares = (store) => (next) => (action) => {
//   if (action.type === 'GET_DINO_FROM_API') {
//     // console.log('Declancher le call API');
//     const stateDino = store.getState();
//     // console.log('searchValue dans le middleware', stateDino.dino.searchValue);

//     fetch(`https://dinotoapi.com/api/dinosaures/16`)
//       .then((response) => response.json())
//       .then((data) => {
//         const dataAction = updateData(data.data);
//         store.dispatch(dataAction);
//       });
//   }

//   // Call the next middleware or the reducer in the chain
//   return next(action);
// };

// export default callApiForOneMiddlewares;
