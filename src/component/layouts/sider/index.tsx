import React, {useContext} from "react";
import {Layout} from "antd";
import Menu from "~/component/layouts/menu";
import Context from "~/component/layouts/context";

const Sider: React.FC = () => {

    const {siderCollapsed,setSiderCollapsed} = useContext(Context);

    return <Layout.Sider
        onCollapse={setSiderCollapsed}
        collapsed={siderCollapsed}
        collapsible
        theme='light'
        className='sider'>
        <Menu/>
    </Layout.Sider>
};

export default React.memo(Sider);

export const SiderContext = React.createContext<Partial<{
    setCollapse: any
    collapsed: boolean
}>>({
    collapsed: false
});
