import React, {lazy} from "react";
import {Options} from "~/types/router";
import Layout from "~/components/layouts";
import {HomeOutlined} from '@ant-design/icons';
import {Outlet} from 'react-router-dom';

const Home = lazy(() => import('~/pages/home'));

const routes: Options[] = [
    {
        path: '/',
        hidden: true,
        module: true,
        // redirect:'/home',
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
                element: <div>22222</div>,
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
    },
    {
        path: '/login',
        element: <div>login</div>,
        mate: {
            title: '登录'
        }
    },
    {
        path: '*',
        element: <div>Not found</div>,
        mate: {
            title: '404 Not found'
        }
    }
];
export default routes;
