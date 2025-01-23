import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from "redux";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({

})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

//@ts-ignore

window.store = store;
