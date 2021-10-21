import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './gallary.css'

const Gallary = () => {
    return (
        <div id="gallary" className="gallary">
            <Container>
            <h1>Meets Our Doctors</h1>
            <Row className="doctors">
                <Col>
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <h2>Mr.Jack</h2>
                    <p>CARDIOLOGIST</p>
                </Col>
                <Col>
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    <h2>Mr.Mike</h2>
                    <p>NEUROLOGIST</p>
                </Col>
                <Col>
                    <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                    <h2>Mr.Hussy</h2>
                    <p>CARDIOLOGIST</p>
                </Col>
                <Col>
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    <h2>Mr.Jack</h2>
                    <p>NEUROLOGIST</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Gallary;