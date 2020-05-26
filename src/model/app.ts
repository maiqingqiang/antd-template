import {Dispatch} from '~/store'
import { delay } from '~/util/common';

export type AppState = {
    loading: boolean
};

export default {
    state: {
        loading: false
    },
    reducers: {
        setLoading: (state: AppState) => {
            state.loading = !state.loading;
            return state;
        }
    },
    effects: (dispatch: Dispatch) => ({
        async setLoadingAsync() {
            await delay(2000);
            dispatch.app.setLoading();
        }
    })
}
