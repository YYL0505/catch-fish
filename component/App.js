import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'
import ActionBar from './ActionBar'
import Homepage from './HomePage'
import ProductListNav from './ProductListNav'
import Layout from './Layout'
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

                        <Layout />
                    </div>
                </content>
                <Footer />
            </div>
        );
    }
}

export default App