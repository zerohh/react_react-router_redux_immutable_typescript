import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { hasLogin, hasNotLogin } from '../../redux/layout/loginStatus/loginStatusAction';
import { LayoutState } from '../../redux/layout/index';
import { RootState } from '../../redux/reducer';

export interface HellowProps {
    compiler: string;
    framework: string;
    layoutState: any;
}

interface State {
}

interface DispatchProps {
    hasLogin: () => void,
    hasNotLogin: ()=> void
}

interface StateProps{
    layoutState: LayoutState
}

const mapStateToProps = (states: RootState): StateProps => ({
    layoutState: states.get('layout')
});

class HellowTT extends Component<HellowProps, State>{
    render() {
        let { layoutState } = this.props;
        console.log(layoutState.getIn(['loginStatus', 'hasLogin']));
        return (
            <div>
                {layoutState.getIn(['loginStatus', 'hasLogin']).toString()}
                <div>这个是第一个页面</div>
                <br/>
                <Link to='/b'>
                    去第二页
                </Link>
            </div>
        );
    }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, {hasLogin, hasNotLogin})(HellowTT);
