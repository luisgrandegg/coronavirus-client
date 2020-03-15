import { LOGIN, LOGOUT } from './action-types';
import { Auth } from '../../entities/Auth';
import { sdk } from '../../sdk';

export interface ILoginAction {
    type: 'LOGIN';
    payload: Auth;
}

export interface ILogoutAction {
    type: 'LOGOUT';
    payload: null;
}

export const login = (auth: Auth): ILoginAction => {
    sdk.setAuthorization(auth);
    return { type: LOGIN, payload: auth}
}

export const logout = (): ILogoutAction => {
    return { type: LOGOUT, payload: null };
};
