import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './HomePage'
import HotProduct from './HotProduct'

class ActionBar extends React.Component {

    render() {
        return (
            <div className="action-bar-bg">
                <div className="action-bar">
                    <a href="#">首页</a>
                    <a href="#">公司简介</a>
                    <a href="#">产品展示</a>
                    <a href="#">联系我们</a>
                </div>
            </div>
        );
    }
}

export default ActionBar