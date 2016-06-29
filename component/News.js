import React from 'react';
import ReactDOM from 'react-dom';

class News extends React.Component {

    render() {
        return (
            <div className="news-container">
                <h4 className="title"> {this.props.title} </h4>
                <div className="divider"></div>

                <div className="company-info">
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <p>
                        沁阳市***渔具研发有限公司是一家集科研、设计、生产、维修、销售为一体的高新技术企业，
                        凭借在遥控船领域的先进理念和成熟的技术服务各位钓友。
                        沁阳市***渔具研发有限公司是一家集科研、设计、生产、维修、销售为一体的高新技术企业，
                        凭借在遥控船领域的先进理念和成熟的技术服务各位钓友。
                    </p>
                </div>

                <div className="divider"></div>

                <p>news 1</p>
                <p>newa 2</p>
                <p>news 3</p>

            </div>
        );
    }
}

export default News