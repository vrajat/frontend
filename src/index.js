import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HelmetProvider } from 'react-helmet-async';

import reducer from './reducers';
import { loadableReady } from "@loadable/component";
import { routes } from "./constants";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

const data = window.__INITIAL_DATA__;

loadableReady(() => {
 ReactDOM.hydrate(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App routes={routes} initialData={data}/>
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
  ,document.getElementById('root'));

});

if (module.hot) {
  module.hot.accept();
}
