import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ searchTerm: event.target.value })} />
        Value of the input: {this.state.searchTerm}
    </div>
    );
  }
}

export default SearchBar;
