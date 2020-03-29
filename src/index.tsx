import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Http from "./utils/http";
import {isEnvProduction} from "./utils/common";
import './mock/index';
import Loader from "~/components/loader";

// if (!isEnvProduction) {
//     require('./mock/index');
// }

Http.init();

Http.get('/api/test', {}, {loading: true}).then(response => {
    console.log(999, response);
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
