import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSModules from 'react-css-modules';
import style from './index.scss';

const Test1 = function() {
    return (
        <div styleName="test">wer</div>
    );
};

const Test = ReactCSSModules(style)(Test1);
ReactDOM.render(
    <Test/>,
    document.getElementById("app")
);
