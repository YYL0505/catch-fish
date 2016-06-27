import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './HomePage'
import HotProduct from './HotProduct'

class ProductListNav extends React.Component {

    render() {
        return (
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
        );
    }
}

export default ProductListNav