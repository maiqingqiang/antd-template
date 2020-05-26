import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from "~/model";
import {useDispatch as ud, useSelector as us} from "react-redux";
import {useEffect} from "react";

export const store = init({
    models
});

export const useSelector = (selector: (state: iRootState) => void) => us(selector);
export const useDispatch = () =>ud<Dispatch>();

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type iRootState = RematchRootState<RootModel>
