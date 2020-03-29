import React, {FC, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {Options} from "~/types/router";
import {isExternal} from "~/utils/common";
import app from "~/config/app";

export const RouteContext = React.createContext<{ route: Options | any }>({route: {}});

const PrivateRoute: FC<Options> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = props.mate?.title || String(app.siteName);
        if (props.path === location.pathname && props.redirect) {
            navigate(props.redirect, {replace: true});
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Route path={props.path}
                  element={props.element &&
                  <RouteContext.Provider value={{route: props}}>{props.element}</RouteContext.Provider>}>
        {props.children}
    </Route>
};

export const renderRoute = (routes: Options[]) => {
    return routes.map(route => {
        if (isExternal(route.path)) return null;
        return <PrivateRoute key={route.path} {...route}>
            {route.subRoutes && renderRoute(route.subRoutes)}
        </PrivateRoute>;
    });
};

export default (routes: Options[]) => {
    return <Routes>
        {renderRoute(routes)}
    </Routes>
};
