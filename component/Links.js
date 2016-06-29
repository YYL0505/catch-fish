import React from 'react';
import ReactDOM from 'react-dom';

class News extends React.Component {

    render() {
        return (
            <div className="links-container">
                <h4 className="title"> 友情链接 </h4>
                <div className="divider"></div>

                <a href=""><span>link 1</span></a>
                <a href=""><span>link 2</span></a>
                <a href=""><span>link 3</span></a>

            </div>
        );
    }
}

export default News