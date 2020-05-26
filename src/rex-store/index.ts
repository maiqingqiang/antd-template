import ReX from '~/lib/ReX';

const {store} = new ReX({
    state: {
        test: []
    },
    reducers: {},
    effects: {},
    modules: {
        user: {
            state: {
                qq: 99
            },
            reducers: {
                setQQ(state: any, {payload}: any) {
                    return {...state, qq: payload}
                },
                setState2(state: any, {payload}: any) {
                    console.log(state);
                    console.log(payload);
                    console.log({...state, ...payload});
                    return {...{...state, ...payload}};
                }
            }
        }
    }
});

export default store;
