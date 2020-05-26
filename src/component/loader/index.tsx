import React, {useEffect, useRef} from 'react';
import NProgress from 'nprogress';
import {Spin} from 'antd';

export interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = () => {
    const willMount = useRef(true);
    if (willMount.current) {
        NProgress.start();
        willMount.current = false;
    }

    useEffect(() => {
        return () => {
            NProgress.done();
        }
    }, []);

    return <Spin/>;
};

export default React.memo(Loader);
