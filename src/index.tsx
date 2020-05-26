import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Http from "./util/http";
import './mock/index';
import {Provider} from 'react-redux';
import {store} from './store';
import {ConfigProvider} from "antd";
import zh_CN from 'antd/lib/locale-provider/zh_CN';

// if (!isEnvProduction) {
//     require('./mock/index');
// }

Http.init();

Http.get('/api/test', {}, {loading: true}).then(response => {
    console.log(999, response);
});

ReactDOM.render(<Provider store={store}>
    <ConfigProvider locale={zh_CN}>
        <App/>
    </ConfigProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
