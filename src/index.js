import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

// axios.defaults.baseURL = "https://inshorts.deta.dev"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);