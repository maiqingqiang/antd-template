import React, {useEffect, useState} from "react";
import {Input, Layout, Menu} from "antd";
import {Options} from "~/types/router";
import {NavLink, useLocation} from 'react-router-dom';
import {CollapseType} from "antd/lib/layout/Sider";
import {SearchOutlined} from '@ant-design/icons';
import {splitPath} from "~/utils/common";

const Sider: React.FC<{ routes: Options[] }> = (props) => {

    const [routes, setRoutes] = useState(props.routes);
    const [collapsed, setCollapse] = useState(false);

    const location = useLocation();
    const paths = splitPath(location.pathname);
    console.log(paths);

    /**
     * 渲染菜单
     * @param routes
     * @param parentPath
     */
    const renderMenu = (routes: Options[], parentPath: string = '') => {
        return routes.map(route => {
            const path = parentPath + route.path;

            if (route.subRoutes) {
                return (
                    <Menu.SubMenu
                        key={path}
                        title={<span>{route.mate?.icon}<span>{route.mate?.title}</span></span>}
                    >
                        {renderMenu(route.subRoutes, path)}
                    </Menu.SubMenu>
                );
            }

            return (
                <Menu.Item key={path}>
                    <NavLink to={path}>
                        {route.mate?.icon}
                        <span>{route.mate?.title}</span>
                    </NavLink>
                </Menu.Item>
            );
        });
    };

    /**
     * 过滤路由
     * @param routes
     * @param keyword
     */
    const filter: any = (routes: Options[], keyword: string) => {
        return routes.filter(value => {
            return value.mate?.title?.search(keyword) !== -1 || (value.subRoutes && JSON.stringify(value.subRoutes).search(keyword) !== -1);
        });
    };

    /**
     * 搜索
     * @param keyword
     */
    const onSearch = (keyword: string) => {
        if (keyword) {
            const searchRoutes = filter(routes, keyword);
            setRoutes(searchRoutes);
        } else {
            setRoutes(props.routes);
        }
    };

    /**
     * 操作收起
     * @param collapsed
     * @param type
     */
    const toggleCollapse = (collapsed: boolean, type: CollapseType) => {
        setCollapse(collapsed);
    };

    /**
     * 点击搜索对象
     */
    const onSearchMenu = () => {
        if (collapsed) setCollapse(false);
    };


    return (
        <Layout.Sider
            onCollapse={setCollapse}
            collapsed={collapsed}
            collapsible
            theme='light'
            className='sider'
        >
            <div className='search-menu' onClick={onSearchMenu}>
                {collapsed ? <SearchOutlined/> :
                    <Input.Search allowClear placeholder="搜索菜单" onSearch={onSearch}/>}
            </div>
            <Menu
                className='menu'
                mode="inline"
                defaultOpenKeys={paths}
                defaultSelectedKeys={paths}
            >
                {routes && renderMenu(routes)}
            </Menu>
        </Layout.Sider>
    );
};

export default React.memo(Sider);
