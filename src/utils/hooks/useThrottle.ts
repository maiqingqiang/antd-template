import { useEffect, useRef, useState } from 'react'

/**
 * 节流
 * @param fn        执行函数
 * @param ms        时间 单位：ms
 * @param deps      依赖
 * @author  John Mai
 */
const useThrottle = (fn:Function, ms = 30, deps = []) => {
    let previous = useRef(0);
    let [time, setTime] = useState(ms);
    useEffect(() => {
        let now = Date.now();
        if (now - previous.current > time) {
            fn();
            previous.current = now;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    const cancel = () => {
        setTime(0)
    };

    return [cancel]
};

export default useThrottle
