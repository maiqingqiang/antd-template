import React, {useContext, useMemo} from "react";
import {Avatar, Dropdown, Layout, Menu} from "antd";
import {MenuUnfoldOutlined, UserOutlined} from '@ant-design/icons';
import routes from "~/router";
import {NavLink} from "react-router-dom";
import {RouteContext} from "~/router/use-routes";
import {useMediaQuery} from "react-responsive";
import Context from "~/component/layouts/context";

const Header: React.FC = () => {
    const {menuDrawerVisible, setMenuDrawerVisible} = useContext(Context);

    const context = useContext(RouteContext);
    let paths = [context.route.path];
    const modules = routes.filter(value => value.module);


    // 屏幕宽度小于 425px 属于手机
    const isMobileScreen = useMediaQuery({maxDeviceWidth: 425});

    const menu = useMemo(() => {
        if (modules.length <= 1) return null;
        return <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px'}}
            defaultSelectedKeys={paths}
        >
            {modules.map(module => <Menu.Item key={module.path}>
                <NavLink to={module.path}>{module.mate.title}</NavLink>
            </Menu.Item>)}
        </Menu>
    }, [paths, modules]);

    const onMenuDrawer = () => {
        setMenuDrawerVisible(true);
    };

    return <Layout.Header className="header">
        {isMobileScreen && <MenuUnfoldOutlined style={{color: '#fff'}} onClick={onMenuDrawer}/>}
        <div className="left">
            <div className="logo"/>
        </div>
        <div className="right">
            {menu}
            <Dropdown overlay={
                <Menu>
                    {isMobileScreen && <Menu.Item>Admin User</Menu.Item>}
                    <Menu.Item>个人资料</Menu.Item>
                    <Menu.Item>系统设置</Menu.Item>
                    <Menu.Divider/>
                    <Menu.Item>退出</Menu.Item>
                </Menu>
            }>
                <div className='user'>
                    <Avatar className='user-avatar' shape="square"
                            icon={<UserOutlined/>}/>{isMobileScreen || 'Admin User'}
                </div>
            </Dropdown>
        </div>

    </Layout.Header>
};

export default React.memo(Header);
