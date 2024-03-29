import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/store";

import ReactDOM from "react-dom";
import App from "./features/App/App";
import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
