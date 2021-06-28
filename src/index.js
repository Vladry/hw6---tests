//   https://github.com/Vladry/hw4_use-redux

import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import {BrowserRouter} from "react-router-dom";
import AppRouts from "./routs/AppRouts";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducer from './store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ErrorBoundary>
            <Header/>
            <Provider store={store}>
            <NavBar/>
            <AppRouts/>
        </Provider>
            <Footer/>
        </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


