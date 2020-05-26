import {AnyAction, applyMiddleware, compose, createStore, ReducersMapObject, Store} from 'redux';

import createSagaMiddleware from 'redux-saga';
import {IEffect, IOtpions} from "./Types";
import * as sagaEffects from 'redux-saga/effects';
import {cancel, fork, select, take, takeEvery} from 'redux-saga/effects';
import {handleActions} from 'redux-actions';
import combineReducersWithRoot from "./combineReducersWithRoot";
import {useStore} from "react-redux";

/**
 * 默认 Reducers
 * @param namespace
 */



export default class ReX {
    public effects: any[] = [];
    public reducers: any = {};
    private readonly _store: Store;

    constructor(options: IOtpions) {
        this.reducers = {...options.reducers};

        options.effects && this.effects.push(handleRexEffects(options.effects));

        let reducersModule: any = {};
        for (const namespace in options.modules) {
            if (!options.modules.hasOwnProperty(namespace)) continue;
            const state = options.modules[namespace].state || {};
            const reducers = {...(options.modules[namespace].reducers || {})};
            const effects = options.modules[namespace].effects || {};

            reducersModule = {
                ...reducersModule,
                [namespace]: handleActions(handleRexReducers(reducers, namespace), state)
            };

            this.effects.push(handleRexEffects(effects, namespace));
        }


        const sagaMiddleware = createSagaMiddleware();
        let enhancers = applyMiddleware(sagaMiddleware);

        if (process.env.NODE_ENV !== 'production') {
            const composeEnhancers =
                ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
                    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 30})) ||
                compose;

            enhancers = composeEnhancers(enhancers);

            /**
             * 注入日志
             */
            const logWatcher = function* () {
                yield takeEvery('*', function* (action: any) {
                    console.group(action.type);
                    console.log('action:', action);
                    console.log('state:', yield select((state: any) => state));
                    console.groupEnd();
                });
            };

            const logFork = function* () {
                yield fork(logWatcher);
            };

            this.effects = [logFork, ...this.effects];
        }

        this.reducers = combineReducersWithRoot(handleActions(options.reducers, options.state || {}), reducersModule);

        this._store = createStore(this.reducers, enhancers);
        this.effects.forEach(sagaMiddleware.run);
        return this;
    }


    get store(): Store<any, AnyAction> {
        return this._store;
    }
}

/**
 * 处理 Effect
 * @param effects
 * @param namespace
 */
export const handleRexEffects = (effects: IEffect, namespace?: string) => {
    return function* () {
        for (let key in effects) {
            if (!effects.hasOwnProperty(key)) continue;

            if (namespace) key = `${namespace}/${key}`;

            const task = yield fork(function* () {
                yield takeEvery(key, function* (action) {
                    yield effects[key](action, sagaEffects);
                });
            });
            yield fork(function* () {
                yield take(`${key}/@@CANCEL_EFFECTS`);
                yield cancel(task);
            });
        }
    };
};

/**
 * 处理 Reducer
 * @param reducers
 * @param namespace
 */
export const handleRexReducers = (reducers: ReducersMapObject, namespace: string) => {
    const newReducers: ReducersMapObject = {};
    const keys = Object.keys(reducers);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        newReducers[`${namespace}/${key}`] = reducers[key];
    }

    return newReducers;
};

export const useCommit = () => {
    const store = useStore();
    return (type: string, payload?: any) => store.dispatch({type, payload})
};
