import React, {Component} from 'react';
import s from './App.scss';
import SearchView from '../search/SearchView';
import stocksAPI from '../../stocks/stocks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      results: [{symbol: 'wix', name: 'Wix.com', price: 32, change: 0.344}]
    };
  }

  search() {
    if (this.state.term === '') {
      this.setState({results: []});
    }
    else {
      stocksAPI.searchStocks(this.state.term)
        .then(data => {
          this.setState({results: data});
        });
    }
  }

  inputChange(e) {
    const value = e.target.value;
    this.search();
    this.setState({term: value});
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
          term={this.state.term}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default App;
