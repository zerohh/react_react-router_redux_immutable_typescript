import { combineReducers } from 'redux-immutable';
import layout, { LayoutState } from './layout/index';
import Immutable from 'immutable';

export interface RootState extends Immutable.Map<string, any>{
    layout: LayoutState
}

export default combineReducers<any>({
    layout
});