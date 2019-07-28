import React, { Component } from 'react';

class Message extends Component {
    render() {

        let japanDate = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Tokyo"});
        japanDate = new Date(japanDate);
        let japanDay = japanDate.getDay();
        let message = " ";

        if( japanDay === 1 || japanDay === 2 || japanDay === 3 || japanDay === 5 ) {
            message = `本日、開院日です。`;
        } else if( japanDay === 4 || japanDay === 6 ){
            message = `本日、午前中のみ開院です。`;
        } else {
            message = `本日、休院日です。`;
        }
        return(
            <div className="message">
                <p>{message}</p>
            </div>
            
        );
    }
}

export default Message;