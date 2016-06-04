import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDxDSX_ofdJVSkdSm2XZuo6NNgUZluXQ6c";

YTSearch({key: API_KEY, term: 'higher order functions'},
  function(data){
    console.log(data);
  }
)

const App = () => {
    return (
      <div>
        <h1>GrooveTube</h1>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
