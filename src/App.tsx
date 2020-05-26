import React, {FC, Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from './router';
import useRoutes from './router/use-routes';
import './App.less';

const App: FC = () => {
    return <Fragment>
        <BrowserRouter>{useRoutes(routes)}</BrowserRouter>
    </Fragment>;
};

export default App;
