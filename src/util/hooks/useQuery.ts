import React from 'react';
import {useLocation} from 'react-router-dom';
import qs from 'query-string';

export const useQuery = () => {
    let location = useLocation();
    return React.useMemo(
        () => qs.parse(location.search),
        [location.search]
    );
};
