import { AnyAction } from 'redux';
import Immutable, { Map } from 'immutable';
export interface StateProps extends Immutable.Map<string, any>{

}

export interface HandlersProps {
    [index:string]: (state: StateProps, action: AnyAction)=>StateProps
}

export default function createReducer(initialState: StateProps, handlers: HandlersProps) {
    return (state = initialState, action:AnyAction) => {
        // convert the initial state to immutable
        // This is useful in isomorphic apps where states were serialized

        const handler = (action && action.type) ? handlers[action.type] : undefined;

        if (!handler) {
            return state;
        }

        state = handler(state, action);

        return state;
    };
}
