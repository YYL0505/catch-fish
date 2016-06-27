import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {

    render() {
        return (
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
        );
    }
}

export default HomePage