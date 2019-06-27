import React, { Component } from 'react';
import {Col} from 'react-grid-system';

class Image extends Component {
    render() {
        return(
            <Col sm={10}>
            <div class="image">
                <img src={require("./img1.jpg")} />
            </div>
            </Col>
        )
    }
}

export default Image;