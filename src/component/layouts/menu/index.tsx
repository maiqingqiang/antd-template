import React, {useContext, useState} from "react";
import {Input, Menu as AntdMenu} from "antd";
import {Options} from "~/type/router";
import {SearchOutlined} from '@ant-design/icons';
import {RouteContext} from "~/router/use-routes";
import {Link, useLocation} from "react-router-dom";
import {splitPath} from "~/util/common";
import Context from "~/component/layouts/context";
import {useMediaQuery} from "react-responsive";


const Menu: React.FC = () => {

    const isMobileScreen = useMediaQuery({maxDeviceWidth: 425});

    const {siderCollapsed,setSiderCollapsed} = useContext(Context);
    const context = useContext(RouteContext);
    const [routes, setRoutes] = useState(context.route.subRoutes ?? []);
    const location = useLocation();
    const paths = splitPath(location.pathname);

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
            setRoutes(context.route.subRoutes);
        }
    };

    /**
     * 点击搜索对象
     */
    const onSearchMenu = () => {
        if (siderCollapsed) setSiderCollapsed(false)
    };

    /**
     * 渲染菜单
     * @param routes
     * @param parentPath
     */
    const renderMenu = (routes: Options[], parentPath: string = '') => {
        return routes.map(route => {

            const path = (parentPath || (context.route.path !== '/' ? context.route.path : '')) + route.path;

            if (route.subRoutes) {
                return (
                    <AntdMenu.SubMenu
                        key={path}
                        title={<span>{route.mate?.icon}<span>{route.mate?.title}</span></span>}
                    >
                        {renderMenu(route.subRoutes, path)}
                    </AntdMenu.SubMenu>
                );
            }

            return (
                <AntdMenu.Item key={path}>
                    <Link to={path}>
                        {route.mate?.icon}
                        <span>{route.mate?.title}</span>
                    </Link>
                </AntdMenu.Item>
            );
        });
    };

    return <>
        <div className='search-menu' onClick={onSearchMenu}>
            {siderCollapsed && !isMobileScreen ? <SearchOutlined/> :
                <Input.Search allowClear placeholder="搜索菜单" onSearch={onSearch}/>}
        </div>
        <AntdMenu
            className='menu'
            mode="inline"
            defaultOpenKeys={siderCollapsed ? [] : paths}
            defaultSelectedKeys={paths}
        >
            {routes && renderMenu(routes)}
        </AntdMenu>
    </>
}

export default React.memo(Menu);
