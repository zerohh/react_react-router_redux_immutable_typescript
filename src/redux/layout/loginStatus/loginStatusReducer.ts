import { Action } from './loginStatusAction';
import { HAD_NOT_LOGIN, HAD_LOGIN } from './loginStatusAction';
import createReducer from '../../utils/createReducer';
import Immutable from 'immutable';

export interface LoginStatus extends Immutable.Map<string, any>{
    hasLogin: boolean
}

const initState = Immutable.fromJS({
    hasLogin: false
});

export default createReducer(initState, {
    [HAD_LOGIN]: (state, action)=>state.merge({
        hasLogin: true
    }),
    [HAD_NOT_LOGIN]: state=>state.merge({
        hasLogin: false
    })
});