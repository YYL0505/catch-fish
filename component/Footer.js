import React from 'react';
import {Link} from 'react-router'


class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="action-bar">
                    <Link to="/">首页</Link>
                    <Link to="/company-info/">公司简介</Link>
                    <Link to="/product-list">产品展示</Link>
                    <Link to="/contact-us">联系我们</Link>
                </div>

                <div className="contact-manager">
                    联系人: ***经理: 0391-5699888
                </div>

                <div className="company">
                    版权所有：沁阳市***渔具研发有限公司 地址：河南省沁阳市******
                </div>
            </footer>
        );
    }
}

export default Footer