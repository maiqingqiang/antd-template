import {useEffect, useRef} from 'react'

/**
 * 防抖
 * @param fn        执行函数
 * @param ms        时间 单位:ms
 * @param deps      依赖对象
 * @author  John Mai
 */
const useDebounce = (fn: Function, ms = 30, deps = []) => {
    let timeout: any = useRef();
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fn()
        }, ms)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    const cancel = () => {
        clearTimeout(timeout.current);
        timeout = null
    };

    return [cancel]
};

export default useDebounce
