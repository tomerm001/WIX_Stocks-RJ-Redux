import React, {Component} from 'react';
import SearchInput from './SearchInput/SearchInput';
import ResultList from './ResultList/ResultList';


class SearchView extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <SearchInput
            inputChange={this.props.inputChange}
            term={this.props.term}
          />
        </div>
        <div className="row">
          <ResultList
            results={this.props.results}
          />
        </div>
      </div>
    );
  }
}

export default SearchView;
