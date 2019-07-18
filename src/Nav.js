import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Nav extends Component {
    render() {
        return (
            <Container>
                <div className = "clinic-name">
                    <Col xs={12}><h1>さわだ歯科</h1></Col>
                </div>
                    <ul className="header">                       
                        <Row>
                            <Col xs={12} md={3}><li>医院紹介</li></Col>
                            <Col xs={12} md={3}><li>開院時間案内</li></Col>
                            <Col xs={12} md={3}><li>お問い合わせ</li></Col>
                            <Col xs={12} md={3}><li>TEL: 875-4555</li></Col>
                        </Row>
                    </ul>
            </Container>
        )
    }
}

export default Nav;