import React, { Component } from 'react';
import  Figure  from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';

class Link extends Component {
    render() {
        return (       
            <div className="link">
                <div className="link-board">
                    <h2>リンク</h2>
                    <Col xs={12} md={6}>
                        <a href="http://www.okisi.org/">  
                            <Figure.Image 
                            width={171}
                            height={180}
                            src={require('./toothbrush.jpg')} roundedCircle 
                            />
                        </a>
                    </Col>
                    <Col xs={12} md={6}>
                            <Figure.Image 
                            width={171}
                            height={180}
                            src={require('./fish.jpg')} roundedCircle />  
                    </Col>                          
                </div>
            </div>
        )
    }
}

export default Link;