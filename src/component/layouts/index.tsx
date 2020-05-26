import React, {Suspense, useState} from 'react';
import '../../App.less';
import {Layout as ALayout} from "antd";
import 'rc-texty/assets/index.css';
import Sider from "~/component/layouts/sider";
import Loader from "~/component/loader";
import Outlet from '../router/outlet';
import Header from "~/component/layouts/header";
import Weclome from "~/component/layouts/welcone";
import Footer from "~/component/layouts/footer";
import {useMediaQuery} from 'react-responsive';
import MenyDrawer from "~/component/layouts/drawer";
import Context from './context';


const Layout: React.FC = (props) => {

    // 屏幕宽度小于 425px 属于手机
    const isMobileScreen = useMediaQuery({maxDeviceWidth: 425});

    // 屏幕宽度小于 1024px 属于小屏幕设备，默认会缩小菜单侧边栏
    const isSmallScreen = useMediaQuery({maxDeviceWidth: 1024}, undefined, matches => {
        setSiderCollapsed(matches);
    });

    const [siderCollapsed, setSiderCollapsed] = useState(isSmallScreen);
    const [menuDrawerVisible, setMenuDrawerVisible] = useState(false);


    return (
        <Context.Provider value={{
            siderCollapsed,
            setSiderCollapsed,
            menuDrawerVisible,
            setMenuDrawerVisible
        }}>
            <ALayout className='app'>
                <Header/>
                <ALayout className='container'>
                    {isMobileScreen ? <MenyDrawer/> : <Sider/>}
                    <ALayout className='main-layout'>
                        <ALayout.Content className="main-content">
                            <Suspense fallback={<Loader/>}>
                                <Outlet><Weclome/></Outlet>
                            </Suspense>
                        </ALayout.Content>
                        <Footer/>
                    </ALayout>
                </ALayout>
            </ALayout>
        </Context.Provider>
    );
};

export default React.memo(Layout);
