import React from "react";

class SearchBar extends React.Component {
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
      <nav class="navbar navbar-light bg-light mb-4">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              placeholder="Search"
              type="text"
              class="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
