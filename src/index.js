import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyDxDSX_ofdJVSkdSm2XZuo6NNgUZluXQ6c";

YTSearch({key: API_KEY, term: 'higher order functions'}, function(data){
  console.log(data);
});

class App extends Component {
    render() {
      return (
        <div>
          <h1>GrooveTube</h1>
          <SearchBar />
        </div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
