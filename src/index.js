import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';


// create a new component
const App = function() {
    return <div>GrooveTube</div>;
}



//take component's html and put in in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
