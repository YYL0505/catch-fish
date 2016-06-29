import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {

    render() {
        return (
            <div className="message-container">
                <h4 className="title"> 在线留言 </h4>
                <div className="divider"></div>

                <div className="message">
                    <img src="../assert/image/ic_favorite.png" alt=""/>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">联系地址:</td>
                                <td><input type="text"/></td>
                            </tr>

                            <tr>
                                <td className="label">联系人:</td>
                                <td><input type="text"/></td>
                            </tr>

                            <tr>
                                <td className="label">联系电话:</td>
                                <td><input type="text"/></td>
                            </tr>

                            <tr>
                                <td className="label">电子邮箱:</td>
                                <td><input type="text"/></td>
                            </tr>

                            <tr>
                                <td className="label">留言:</td>
                                <td><textarea></textarea></td>
                            </tr>

                            <tr>
                                <td className="label">备注:</td>
                                <td><textarea></textarea></td>
                            </tr>

                            <tr>
                                <td colSpan="2">
                                    <button>提交</button>
                                    <button>清除</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default Message