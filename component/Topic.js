import React from 'react';
import ReactDOM from 'react-dom';

class Topic extends React.Component {

    render() {
        return (
            <div className="topic-container">
                <h4 className="title"> 热点关键词 </h4>
                <div className="divider"></div>

                <div >
                    <p>news 1</p>
                    <p>newa 2</p>
                    <p>news 3</p>
                </div>


            </div>
        );
    }
}

export default Topic