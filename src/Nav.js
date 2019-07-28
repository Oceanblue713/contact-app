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
                            <Col xs={12} md={3}><li><a href="#about">医院紹介</a></li></Col>
                            <Col xs={12} md={3}><li><a href="#contact">お問い合わせ</a></li></Col>
                            <Col xs={12} md={3}><li><a href="#link">リンク</a></li></Col>
                            <Col xs={12} md={3}><li><a href="#tel">TEL: 875-4555</a></li></Col>
                        </Row>
                    </ul>
            </Container>
        )
    }
}

export default Nav;