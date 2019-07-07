import React, { Component } from 'react';
import {Row, Col } from 'react-grid-system';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <h1>さわだ歯科</h1>
                    <ul className="header">
                        <Row>
                            <Col xs={12} md={3} ><li>医院紹介</li></Col>
                            <Col xs={12} md={3}><li>開院時間案内</li></Col>
                            <Col xs={12} md={3}><li>お問い合わせ</li></Col>
                            <Col xs={12} md={3}><li>TEL: 875-4555</li></Col>
                        </Row>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;