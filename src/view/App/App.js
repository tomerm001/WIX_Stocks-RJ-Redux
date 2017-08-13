import React, {Component} from 'react';
import s from './App.scss';
import SearchView from '../search/SearchView';
import stocksAPI from '../../stocks/stocks';
import {connect} from 'react-redux';

//action creators
import {updateTerm, searchTerm} from './index';

class App extends Component {
  inputChange(e) {
    const value = e.target.value;

    this.props.updateTerm(value);
    this.props.searchStocks(value);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Kickstart Stocks</h1>
            <div className="btn-group">
              <button className="btn btn-default">Search</button>
              <button className="btn btn-default">Favorites</button>
            </div>
          </div>
        </div>
        <SearchView
          inputChange={this.inputChange.bind(this)}
          term={this.props.term}
          results={this.props.results}
        />
      </div>
    );
  }
}

//REDUX
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const updateValue = value => {
    dispatch(updateTerm(value));
  };

  const searchStocks = value => {
    dispatch(searchTerm(value));
  };

  return {updateTerm: updateValue, searchStocks};
};

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default SmartApp;
