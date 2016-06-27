import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div class="homepage">
                <header>
                    <p className="welcome-contact">
                        <span className="welcome">欢迎来到沁阳市***鱼具研发有限公司网站!</span>
                        <span className="free-contact">免费电话: 000-000-000</span>
                    </p>

                    <div className="logo-contact">
                        <div className="logo">
                            <img className="logo-img" src="../assert/image/ic_favorite.png"></img>
                            <h1>沁阳市***鱼具研发有限公司</h1>
                        </div>

                        <div className="contact">
                            <img className="contact-img" src="../assert/image/ic_favorite.png"></img>
                            <div className="contact-text">
                                <p>联系电话</p>
                                <p>0391-5699888</p>
                                <p className="sec-contact">0391-5699888</p>
                            </div>
                        </div>
                    </div>

                    <div className="action-bar-bg">
                        <div className="action-bar">
                            <a href="#">首页</a>
                            <a href="#">公司简介</a>
                            <a href="#">产品展示</a>
                            <a href="#">联系我们</a>
                        </div>
                    </div>

                    <div className="hot-key-word">
                        <strong>热门关键词:</strong>我也不知道写点什么好。
                    </div>
                </header>

                <content>this is content</content>
                <footer>this is footer</footer>
            </div>
        );
    }
}

export default HomePage