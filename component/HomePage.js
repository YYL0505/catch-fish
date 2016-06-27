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


                </header>

                <content>
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

                    <div className="main-img">
                        <img src="../assert/image/ic_favorite.png"/>
                    </div>

                    <div className="divider"></div>

                    <div className="product-character">
                        <h3 className="character-title">产品特点:</h3>

                        <div className="characters">
                            <ul>
                                <li>1、专业设计：阻力小，速度快，防渗漏，性能稳定。</li>
                                <li>2、专用电机：低噪音，低耗能，寿命长。</li>
                                <li>3、专用电路：无级调速，超强抗干扰，控制精准。</li>
                                <li>4、专用遥控：多条船同时航行互不干扰，遥控距离达500米。</li>
                                <li>5、玻璃钢船体：耐腐蚀，抗氧化，经久耐用。</li>
                            </ul>

                            <img src="../assert/image/ic_favorite.png" alt=""/>
                        </div>
                    </div>

                    <div className="product-list">
                        <ul className="product-list-nav">
                            <li className="product-list-nav-title">产品展示</li>
                            <li>
                                <ul className="product-list-nav-category">
                                    <li>产品列表</li>
                                    <li>
                                        <ul>
                                            <li>HYZ-11</li>
                                            <li>HYZ-22</li>
                                            <li>HYZ-33</li>
                                            <li>HYZ-44</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <div className="hot-products">
                            <h4 className="title">热卖产品</h4>
                            <div className="hot-products-divider">

                            </div>
                            <div>
                                <img src="../assert/image/ic_favorite.png" alt=""/>
                                <img src="../assert/image/ic_favorite.png" alt=""/>
                                <img src="../assert/image/ic_favorite.png" alt=""/>
                                <img src="../assert/image/ic_favorite.png" alt=""/>
                                <img src="../assert/image/ic_favorite.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </content>

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
            </div>
        );
    }
}

export default HomePage