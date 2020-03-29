import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from './router';
import useRoutes from './router/use-routes';
import './App.less';

const App: FC = () => {
    return <BrowserRouter>
        {useRoutes(routes)}
    </BrowserRouter>;
};

export default App;
