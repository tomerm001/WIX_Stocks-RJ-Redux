import {combineReducers} from 'redux';
import {UPDATE_STOCKS, UPDATE_TERM} from './actionTypes';


const term = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TERM:
      return action.value;
    default:
      return state;
  }
};

const resultsInitialState = [{symbol: 'wix', name: 'Wix.com', price: 32, change: 0.344}];
const results = (state = resultsInitialState, action) => {
  switch (action.type) {
    case UPDATE_STOCKS:
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  term,
  results
});
