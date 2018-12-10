import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/styles.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/CombinedReducer';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8005/api'
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
