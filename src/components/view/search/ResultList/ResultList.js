import React, {Component} from 'react';

class ResultList extends Component {
  constructor(props) {
    super();
  }

  renderSearchOptions() {

    return this.props.results.map((result, index) => {
      return (
        <tr key={result.symbol} data-result-number={index}>
          <td>{result.symbol}</td>
          <td>{result.name}</td>
          <td>{result.price}</td>
          <td>{result.change}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSearchOptions()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultList;
