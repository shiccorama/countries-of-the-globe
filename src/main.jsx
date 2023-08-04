import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// setup routes
// npm install react-router-dom
import { BrowserRouter } from "react-router-dom";
// import store from redux_store
import {store_one} from "./redux_store/store_one.js"
// import provider from react-redux
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store_one} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
