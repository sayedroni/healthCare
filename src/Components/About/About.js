import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'

const About = () => {
    return (
        <div id="About">
            <Container className="aboutUS">
            <Row>
                <Col>
                <img src="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </Col>
                <Col>
                <h1>About Us</h1>
                <p>MediCare Hospital is the best hospital in this town.We always provide best service.Our doctors are so helpful.We always try to do our best.People are happy with our service.MediCare Hospital is the best hospital in this town.We always provide best service.Our doctors are so helpful.We always try to do our best.People are happy with our service.MediCare Hospital is the best hospital in this town.We always provide best service.Our doctors are so helpful.We always try to do our best.People are happy with our service.MediCare Hospital is the best hospital in this town.We always provide best service.Our doctors are so helpful.We always try to do our best.People are happy with our service</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default About;