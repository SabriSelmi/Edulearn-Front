import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import App from './App';
import Reducer from './Reducer';
import * as serviceWorker from './serviceWorker';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const store = createStore(Reducer)
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

serviceWorker.unregister();
