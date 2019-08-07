import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HellowTT from '../Hellow/Hellow';
import HellobTT from '../Hellob/Hellob';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' render={()=><HellowTT compiler='sss' framework="sss" />} />
                <Route path='/b' component={HellobTT} />
            </div>
        );
    }
}
