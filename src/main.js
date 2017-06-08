import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import translateCombineReducer from 'translate-combine-reducer';
import fetchAvailableLanguages from 'fetch-available-languages';
import Translator from 'translator';


const store = createStore(
  translateCombineReducer,
  applyMiddleware(thunk)
);

// fetchAvailableLanguages()(store.dispatch);
store.dispatch(fetchAvailableLanguages());

ReactDOM.render(
  <Provider store={store}>
    <Translator />
  </Provider>,
  document.getElementById('root')
);
