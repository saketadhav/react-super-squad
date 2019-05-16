import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);

//// Return the current state tree of your application. It is equal to the last value returned by the store's reducer.
// console.log('store.getState()', store.getState());

//// Add a change listener.
// store.subscribe(() => console.log('store', store.getState()));

//// Dispatches an action. This is the only way to trigger a state change.
// store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
