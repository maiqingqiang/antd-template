import React, {Suspense, useContext, useState} from 'react';
import '../../App.less';
import {Avatar, Dropdown, Layout as ALayout, Menu, PageHeader} from "antd";
import {UserOutlined} from '@ant-design/icons';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import app from "../../config/app";
import {RouteContext} from "~/router/use-routes";
import Sider from "~/components/layouts/sider";
import Loader from "~/components/loader";
import Outlet from '../router/outlet';

const Layout: React.FC = (props) => {

    const context = useContext(RouteContext);

    const [show] = useState(true);

    const geInterval = (e: any) => {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    };
    const getEnter = (e: any) => {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return {...t, y: '-30%', duration: 150};
        }
        return t;
    };

    const getSplit = (e: any) => {
        const t = e.split(' ');
        const c: any = [];
        t.forEach((str: string, i: number) => {
            c.push((
                <span key={`${str}-${i}`}>
          {str}
        </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    };

    return (<ALayout className='app'>
        <ALayout.Header className="header">
            <div className="left">
                <div className="logo"/>
            </div>
            <div className="right">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                                1st menu item
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                                2nd menu item
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                                3rd menu item
                            </a>
                        </Menu.Item>
                    </Menu>
                }>
                    <div className='user'>
                        <Avatar className='user-avatar' shape="square" icon={<UserOutlined/>}/>Admin User
                    </div>
                </Dropdown>
            </div>
        </ALayout.Header>
        <ALayout className='container'>
            <Sider routes={context.route.subRoutes || []}/>
            <ALayout className='main-layout'>
                <PageHeader
                    className="page-header"
                    title="Title"
                    // breadcrumb={{ routes }}
                    subTitle="This is a subtitle"
                />
                <ALayout.Content
                    className="main-content"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Suspense fallback={<Loader/>}>
                        <Outlet>
                            <div className="combined-wrapper">
                                <div className="combined">
                                    <div className="combined-shape">
                                        <div className="shape-left">
                                            <TweenOne
                                                animation={[
                                                    {x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600},
                                                    {x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150},
                                                ]}
                                            />
                                        </div>
                                        <div className="shape-right">
                                            <TweenOne
                                                animation={[
                                                    {x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600},
                                                    {x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150},
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <Texty
                                        className="title"
                                        type="mask-top"
                                        delay={400}
                                        enter={getEnter}
                                        interval={geInterval}
                                        component={TweenOne}
                                        componentProps={{
                                            animation: [
                                                {x: 130, type: 'set'},
                                                {x: 100, delay: 500, duration: 450},
                                                {
                                                    ease: 'easeOutQuart',
                                                    duration: 300,
                                                    x: 0,
                                                },
                                                {
                                                    letterSpacing: 0,
                                                    delay: -300,
                                                    scale: 0.9,
                                                    ease: 'easeInOutQuint',
                                                    duration: 1000,
                                                },
                                                {
                                                    scale: 1,
                                                    width: '100%',
                                                    delay: -300,
                                                    duration: 1000,
                                                    ease: 'easeInOutQuint'
                                                },
                                            ],
                                        }}
                                    >
                                        Welcome
                                    </Texty>
                                    <TweenOne
                                        className="combined-bar"
                                        animation={{delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo'}}
                                    />
                                    <Texty
                                        className="content"
                                        type="bottom"
                                        split={getSplit}
                                        delay={2200}
                                        interval={30}
                                    >
                                        欢迎进入后端管理系统
                                    </Texty>
                                </div>
                            </div>
                        </Outlet>
                    </Suspense>
                </ALayout.Content>
                <ALayout.Footer className='footer'>&copy;{app.copyright}</ALayout.Footer>
            </ALayout>
        </ALayout>
    </ALayout>)
};

export default React.memo(Layout);
