export default function combineReducersWithRoot(rootReducer: any, reducers: any) {
    return (state: any, action: any) => {
        const newReducer = {...rootReducer(state, action)};
        return Object.keys(reducers).reduce((newReducers, namespace) => {
            const newState = state ? state[namespace] : undefined;
            newReducers[namespace] = reducers[namespace](newState, action);
            return newReducers;
        }, newReducer);
    }
};
