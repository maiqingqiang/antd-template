import React, {useContext} from "react";
import {Drawer} from "antd";
import Menu from "~/component/layouts/menu";
import Context from "~/component/layouts/context";
import './style.less';

/**
 * 系统设置抽屉
 * @constructor
 */
const MenuDrawer: React.FC = () => {

    const {menuDrawerVisible, setMenuDrawerVisible} = useContext(Context);

    const onClose = () => {
        setMenuDrawerVisible(false);
    }

    return <Drawer
        className='menu-drawer'
        placement="left"
        closable={false}
        onClose={onClose}
        visible={menuDrawerVisible}
    >
        <Menu/>
    </Drawer>
};

export default React.memo(MenuDrawer);

export const MenyDrawerContext = React.createContext<Partial<any>>({});
