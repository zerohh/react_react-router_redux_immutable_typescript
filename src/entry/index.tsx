import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';

const composeEnhancers = composeWithDevTools({});

import reducer from '../redux/reducer';
const initStateImmutable = Immutable.fromJS({});

const store = createStore(reducer, initStateImmutable, composeEnhancers(applyMiddleware(Thunk)));

import Index from '../pages/Index/Index';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);