import React, { Component } from 'react';

class Image extends Component {
    render() {
        return(
            <div class="image">
                <img src={require("./img1.jpg")} />
            </div>
        )
    }
}

export default Image;