import React, {Component} from 'react';
import SearchInput from './SearchInput/SearchInput';
import ResultList from './ResultList/ResultList';


class SearchView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {

    return (
      <div>
        <div className="row">
          <SearchInput/>
        </div>
        <div className="row">
          <ResultList results={[{symbol: 'wix', name: 'Wix.com', price: 32, change: 0.344}]}/>
        </div>
      </div>
    );
  }
}

export default SearchView;
