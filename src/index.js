import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'
import axios from 'axios'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, createLogger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

axios.defaults.headers.common['Authorization'] = 'xenonflash'

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
