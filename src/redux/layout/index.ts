import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import loginStatus, { LoginStatus } from './loginStatus/loginStatusReducer';

export interface LayoutState extends Immutable.Map<string, any>{
    loginStatus: LoginStatus
}

export default combineReducers({
    loginStatus: loginStatus
});