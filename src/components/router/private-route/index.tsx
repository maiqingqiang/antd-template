import React, {FC, useEffect} from "react";
import {Route} from 'react-router-dom';

export type RouteProps = {
    auth: boolean
};

const PrivateRoute: FC<RouteProps> = ({children}) => {

    useEffect(() => {

    }, []);

    return <Route>
        {children}
    </Route>
};

export default PrivateRoute;
