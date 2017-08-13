import React, {Component} from 'react';


class SearchInput extends Component {
  buttonClick(e) {
    console.log('Button clicked');
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input
            className="form-control"
            value={this.props.term}
            onChange={this.props.inputChange}
          />
          <span
            className="input-group-addon"
            onClick={this.buttonClick.bind(this)}>Search</span>
        </div>
      </div>
    );
  }
}

export default SearchInput;
