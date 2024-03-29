import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'

import burger from './Store/Reducers/Burger'
import orders from './Store/Reducers/Oders'
import auth from './Store/Reducers/Auth'

const rootReducer =combineReducers({
    burger,
    orders,
    auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store= createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(

      <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>
     
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
