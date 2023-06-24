//UPDATE INDEX.JS FILE
import React from 'react';
import ReactDOM from 'react-dom';
//Import Provider component fro react redux to encapsulate the App component
import { Provider } from 'react-redux';
//Import created store implementation
import store from './store/store';
//Import the App component
import App from './App';
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// Implementing the Provider component and passing our store as one of its
// props to ensure the store is correctly implemented and initiated.
<Provider store={store}>
<App />
</Provider>
);
reportWebVitals();
