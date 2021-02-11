import store from '../store';


export const deleteSelectedStock = (detailedStock) => {
  const stockSymbol = detailedStock['01. symbol'];
  store.dispatch({type: 'DELETE_STOCK', payload: stockSymbol});
  store.dispatch({type: 'DELETE_DETAILED_STOCK'});
};
