import {useEffect} from 'react'

/**
 * 设置 Title
 * @param title
 * @author John Mai
 */
const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTitle
