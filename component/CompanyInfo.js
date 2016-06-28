import React from 'react';
import ReactDOM from 'react-dom';

class CompanyInfo extends React.Component {

    render() {
        return (
            <div className="container">
                <h4 className="title">公司简介</h4>
                <div className="container-divider"></div>
                <div className="company-info" >
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <p>沁阳市***渔具研发有限公司是一家集科研、设计、生产、维修、销售为一体的高新技术企业，
                        凭借在遥控船领域的先进理念和成熟的技术服务各位钓友。</p>
                    <p>公司自成立以来，始终坚持“质量第一，诚信经营”的创业理念。
                        致力于将现代高科技手段服务传统垂钓方法.
                        以一流的研发技术、专业的生产设备、优质的售后服务倾力为钓鱼人打造一只挥撒自如,
                        能送钩、打窝的长臂--好雅致无线遥控船，帮助钓鱼人早日实现多钓鱼、钓大鱼的梦想！
                        我公司产品已遍及全国各地，并已远销海外，南非，中东，欧洲等。深受中外钓友的青睐。 </p>
                    <p>因为专业，所以更好！</p>
                </div>
            </div>
        );
    }
}

export default CompanyInfo