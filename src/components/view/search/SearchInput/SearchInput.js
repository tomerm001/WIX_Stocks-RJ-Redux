import React, {Component} from 'react';


class SearchInput extends Component {
  constructor(props) {
    super();
    this.state = {inputValue: ''};
  }

  inputChange(e) {
    const value = e.target.value;
    this.setState({inputValue: value});
  }

  buttonClick(e) {
    console.log('Button clicked');
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input className="form-control" value={this.state.inputValue}
                 onChange={this.inputChange.bind(this)}/>
          <span className="input-group-addon" onClick={this.buttonClick.bind(this)}>Search
          </span>
        </div>
      </div>
    );
  }
}


export default SearchInput;
