import React, { Component } from 'react';
import {Col} from 'react-grid-system';
import ImageFadeIn from 'react-image-fade-in';

class Image extends Component {
    render() {
        return(
            <Col sm={12}>
            <div className="image">
                <ImageFadeIn src={require("./img1.jpg")}
                     className="responsive"
                     width={400}
                     height={200}
                     opacityTransition={3}/>
            </div>
            </Col>
        )
    }
}

export default Image;