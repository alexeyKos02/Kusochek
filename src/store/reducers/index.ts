import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from "./userReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({reducer: {user: userReducer}})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch