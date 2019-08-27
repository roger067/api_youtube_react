import React from "react";

class SearchInput extends React.Component {
  state = {
    term: ""
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <input
            placeholder="Search"
            type="text"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchInput;
