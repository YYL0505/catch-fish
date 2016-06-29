import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'
import ActionBar from './ActionBar'
import Homepage from './HomePage'
import ProductListNav from './ProductListNav'
import News from './News'
import Topic from './Topic'
import Message from './Message'
import Links from './Links'
import Footer from './Footer'

class App extends React.Component {

    render() {
        return (
            <div class="homepage">
                <Header />
                <content>
                    <ActionBar />
                    <div className="hot-key-word">
                        <strong>热门关键词:</strong>我也不知道写点什么好。
                    </div>

                    <div className="main-img">
                        <img src="../assert/image/ic_favorite.png"/>
                    </div>

                    <div className="divider"></div>

                    <Homepage />

                    <div className="product-list">
                        <ProductListNav />

                        {this.props.children}
                    </div>

                    <div className="newses-container">
                        <News title="新闻动态"/>
                        <News title="行业资讯"/>
                    </div>

                    <div className="topic-msg-container">
                        <Topic />
                        <Message />
                    </div>

                    <Links />
                </content>
                <Footer />
            </div>
        );
    }
}

export default App