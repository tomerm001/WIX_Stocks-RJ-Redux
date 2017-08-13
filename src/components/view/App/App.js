import React, {Component} from 'react';
import s from './App.scss';
import SearchView from '../search/SearchView'

class App extends Component {
  constructor() {
    super();
    this.state = {};
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
        <SearchView/>
      </div>
    );
  }
}

export default App;
