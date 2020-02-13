import React from 'react';
import logo from './logo.svg';
import './App.less';
import {Avatar, Breadcrumb, Layout, Menu, Dropdown, Input} from "antd";
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {
    Header, Content,
    Footer, Sider
} = Layout;
const {SubMenu} = Menu;

const App: React.FC = () => {
    return (
        <Layout className='app'>
            <Header className="header">
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
            </Header>
            <Layout className='container'>
                <Sider theme='light' className='sider'>
                    <div className='search-menu'>
                        <Input.Search allowClear placeholder="搜索菜单" onSearch={value => console.log(value)}/>
                    </div>
                    <Menu
                        className='menu'
                        mode="inline">
                        <SubMenu
                            key="sub1"
                            title={
                                <span><UserOutlined/>subnav 1</span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
