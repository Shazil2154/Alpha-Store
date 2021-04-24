import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {currentRoute, currentBucket} from './reducers';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
const logger = createLogger();
const rootReducer = combineReducers({currentRoute, currentBucket})
const store = createStore(rootReducer,applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
