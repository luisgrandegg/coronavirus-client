import { LOGOUT, LOGIN } from '../actions/action-types';
import { ILogoutAction, ILoginAction } from '../actions/status';
import { IAuth } from '../../entities/Auth';

export interface IStatusState {
    auth: IAuth | null;
}

export const initialState: IStatusState = {
    auth: null
};

type Statusction = ILoginAction | ILogoutAction;

export const reducer = (state: IStatusState = initialState, action: Statusction): IStatusState => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                auth: action.payload
            }

        }
        case LOGOUT: {
            return {
                ...state,
                auth: null
            };
        }
        default: {
            return state;
        }
    }
};
