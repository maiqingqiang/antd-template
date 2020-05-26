import React, {lazy} from "react";
import {Options} from "~/type/router";
import Layout from "~/component/layouts";
import {HomeOutlined} from '@ant-design/icons';
import {Outlet} from 'react-router-dom';
import Login from '~/page/login';

const Home = lazy(() => import('~/page/home'));

const routes: Options[] = [
    {
        path: '/',
        hidden: true,
        module: true,
        // redirect: '/home',
        alway: false,
        element: <Layout/>,
        mate: {
            title: '首页',
            permission: [],
            role: [],
            icon: <HomeOutlined/>,
            breadcrumb: false,
            auth: false
        },
        subRoutes: [
            {
                path: '/home',
                element: <Home/>,
                mate: {
                    title: '首页',
                    icon: <HomeOutlined/>
                }
            },
            {
                path: '/home2',
                element: <div>22222</div>,
                mate: {
                    title: '首页22',
                    icon: <HomeOutlined/>
                }
            },
            {
                path: '/home23',
                element: <Outlet/>,
                mate: {
                    title: '首页2233',
                    icon: <HomeOutlined/>
                },
                subRoutes: [
                    {
                        path: '/home4',
                        element: <Outlet/>,
                        mate: {
                            title: '4444'
                        },
                        subRoutes: [{
                            path: '/home6',
                            element: <div>6666666</div>,
                            mate: {
                                title: '444664'
                            }
                        }]
                    }
                ]
            },
        ]
    }, {
        path: '/test',
        hidden: true,
        module: false,
        alway: false,
        element: <Layout/>,
        mate: {
            title: '测试',
            permission: [],
            role: [],
            icon: <HomeOutlined/>,
            breadcrumb: false,
            auth: false
        },
        subRoutes: [
            {
                path: '/home2',
                element: <div>22222</div>,
                mate: {
                    title: '首页2',
                    icon: <HomeOutlined/>
                }
            },
            {
                path: '/home233',
                element: <div>22222</div>,
                mate: {
                    title: '首页223',
                    icon: <HomeOutlined/>
                }
            },
            {
                path: '/home234',
                element: <Outlet/>,
                mate: {
                    title: '首页22334',
                    icon: <HomeOutlined/>
                },
                subRoutes: [
                    {
                        path: '/home4',
                        element: <Outlet/>,
                        mate: {
                            title: '4444546'
                        },
                        subRoutes: [{
                            path: '/home6',
                            element: <div>6666666</div>,
                            mate: {
                                title: '441114664'
                            }
                        }]
                    }
                ]
            },
        ]
    }, {
        path: '/login',
        element: <Login/>,
        mate: {
            title: '登录'
        }
    }, {
        path: '*',
        element: <div>Not found</div>,
        mate: {
            title: '404 Not found'
        }
    }
];
export default routes;
