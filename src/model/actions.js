import {UPDATE_STOCKS, UPDATE_TERM} from './actionTypes';
import stocksAPI from '../stocks/stocks';

export const searchTerm = term => (dispatch, getState) => {
  if (getState().term === '') {
    dispatch({type: UPDATE_STOCKS, value: []});
  }
  else {
    stocksAPI.searchStocks(term)
      .then(data => {
        dispatch({type: UPDATE_STOCKS, value: data});
      });
  }
};

export const updateTerm = term => ({type: UPDATE_TERM, value: term});


