import {useState} from 'react'

/**
 * 强制渲染
 * @author John Mai
 */
const useForceUpdate = () => {
    const [, setFlag] = useState();
    return () => {
        setFlag(Date.now());
    };
};

export default useForceUpdate
