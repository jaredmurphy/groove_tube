import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDxDSX_ofdJVSkdSm2XZuo6NNgUZluXQ6c";
//import { Component } from 'react';


// create a new component
const App = () => {
    return (
      <div>
        <h1>GrooveTube</h1>
        <SearchBar />
      </div>
    );
}



//take component's html and put in in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
