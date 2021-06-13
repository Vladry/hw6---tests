import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/App";
import AppRouts from "./routs/AppRouts";
import NavBar from "./components/navbar/NavBar";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ErrorBoundary>
            <NavBar/>
            <AppRouts/>
        </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


