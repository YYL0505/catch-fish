import React from 'react';
import ReactDOM from 'react-dom';

class HotProduct extends React.Component {

    render() {
        return (
            <div className="container hot-products">
                <h4 className="title">热卖产品</h4>
                <div className="container-divider">

                </div>
                <div>
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default HotProduct