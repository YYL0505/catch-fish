import React from 'react';
import ReactDOM from 'react-dom';

class HotProduct extends React.Component {

    render() {
        return (
            <div className="container">
                <h4 className="title">联系我们</h4>

                <div className="container-divider"></div>

                <div className="contact-us">
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <div>
                        <p>名称: 沁阳市***鱼具制造公司</p>
                        <p>地址: 沁阳市******</p>
                        <p>电话: 0391-5699888</p>
                        <p>传真: +86 000-0000-999</p>
                        <p>邮箱: ***@google.com</p>
                        <p>网址: www.qy**yj.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HotProduct