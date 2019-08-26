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
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="container-fluid">
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
        </div>
      </nav>
    );
  }
}

export default SearchBar;
