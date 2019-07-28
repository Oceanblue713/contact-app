import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="Contact" id="contact">
                <h2>お問い合わせ</h2>
                <h4>住所: 900-0006 沖縄県浦添市勢理客4-5-5</h4>
                <h4 id="tel"><a href="tel:0988754555">TEL: 098-875-4555</a></h4>
                <table>
                    <tr>
                        <th className="time"></th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                        <th>日・祝</th>
                    </tr>
                    <tr>
                        <th className="time">午前9:00~12:00</th>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>／</td>
                    </tr>
                    <tr>
                        <th className="time">午後2:00~6:00</th>
                        <td>●</td>
                        <td>●</td>
                        <td>●</td>
                        <td>／</td>
                        <td>●</td>
                        <td>／</td>
                        <td>／</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Contact;