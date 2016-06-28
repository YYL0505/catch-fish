import React from 'react';
import {Link} from 'react-router'

class ActionBar extends React.Component {

    render() {
        return (
            <div className="action-bar-bg">
                <div className="action-bar">
                    <Link to="/">首页</Link>
                    <Link to="/company-info/">公司简介</Link>
                    <Link to="/product-list">产品展示</Link>
                    <Link to="/contact-us">联系我们</Link>
                </div>
            </div>
        );
    }
}

export default ActionBar