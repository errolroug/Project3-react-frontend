import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App/App';

import * as serviceWorker from './serviceWorker';

// main component we can decide what components to render here and which to render inthe other files
// Right now it renders the App Component
// We can add or remove components here as well as pass data to the children

ReactDOM.render(<div>
    
    <App /> 
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
