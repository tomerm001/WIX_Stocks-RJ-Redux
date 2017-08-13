export {default} from './App';
import stocksAPI from '../../stocks/stocks';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


//actions
const SEARCH = 'search';
const UPDATE_TERM = 'updateTerm';
const UPDATE_STOCKS = 'updateStockSearch';


//action creator
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


//default state
const defaultState = {
  term: '',
  results: [{symbol: 'wix', name: 'Wix.com', price: 32, change: 0.344}]
};


//reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH:
      if (state.term === '') {
        return {results: []};
      }
      else {
        return {results: []};
      }
    case UPDATE_TERM:
      return {...state, term: action.value};
    case UPDATE_STOCKS:
      return {...state, results: action.value};
    default:
      return state;
  }
};

export const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
