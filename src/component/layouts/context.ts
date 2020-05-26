import React from "react";

const Context = React.createContext<Partial<{
    siderCollapsed: boolean,
    menuDrawerVisible: boolean,
    setSiderCollapsed:any,
    setMenuDrawerVisible:any
}>>({
    siderCollapsed: false,
    menuDrawerVisible: false
});


export default Context;
