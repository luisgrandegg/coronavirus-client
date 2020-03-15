import Cookies from 'js-cookie';
import { persistCombineReducers } from 'redux-persist';
// @ts-ignore
import { CookieStorage } from 'redux-persist-cookie-storage';
import { IStatusState, initialState as statusInitialState, reducer as statusReducer } from './status';

export interface IAppState {
    status: IStatusState;
}

export const initialState: IAppState = {
    status: statusInitialState
};

const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies, {}),
};
const rootReducer = persistCombineReducers<IAppState>(persistConfig, {
    // @ts-ignore
    status: statusReducer
});

export default rootReducer;
