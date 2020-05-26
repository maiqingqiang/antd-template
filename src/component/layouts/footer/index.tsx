import React from "react";
import {Layout} from "antd";
import app from "~/config/app";

const Footer: React.FC = () => {
    return <Layout.Footer className='footer'>&copy;{app.copyright}</Layout.Footer>
};

export default React.memo(Footer);
