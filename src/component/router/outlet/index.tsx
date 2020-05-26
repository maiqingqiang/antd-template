import React from "react";
import {useOutlet} from "react-router-dom";

const Outlet:React.FC<any> = ({children}) => {
    return useOutlet() || children;
};

export default Outlet;
