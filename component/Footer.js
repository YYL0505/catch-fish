import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './HomePage'
import HotProduct from './HotProduct'

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="action-bar">
                    <a href="#">首页</a>
                    <a href="#">公司简介</a>
                    <a href="#">产品展示</a>
                    <a href="#">联系我们</a>
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