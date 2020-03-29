import React from "react";
import {useOutlet} from "react-router-dom";

const Outlet: React.FC = ({children}) => {
    return useOutlet() || children;
};

export default Outlet;
