export const HAD_LOGIN = 'HAD_LOGIN';
export const HAD_NOT_LOGIN = 'HAD_NOT_LOGIN';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export interface LoginAction {
    type: string
}

export interface LogoutAction {
    type: string
}

export type Action = LoginAction | LogoutAction;

export const hasLogin = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void =>{
        dispatch({
            type: HAD_LOGIN
        });
    };
}

export const hasNotLogin = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>):void =>{
        dispatch({
            type: HAD_NOT_LOGIN
        });
    };
}