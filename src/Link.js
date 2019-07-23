import React, { Component } from 'react';
import  Figure  from 'react-bootstrap/Figure';

class Link extends Component {
    render() {
        return (       
            <div className="link">
                <h2>リンク</h2>      
                    <a href="http://www.okisi.org/">  
                        <Figure.Image 
                        width={171}
                        height={180}
                        src={require('./toothbrush.jpg')} roundedCircle 
                        />
                    </a>
                        <Figure.Image 
                        width={171}
                        height={180}
                        src={require('./fish.jpg')} roundedCircle />                         
            </div>
        )
    }
}

export default Link;