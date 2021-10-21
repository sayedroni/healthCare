import React from 'react';
import { Button,Card, Col, Container, Row,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './single.css'

const Single = (props) => {
    const {title,image,Details} = props.ourservice
    return (
        <div>
            <Container className="Mycard">
            <div>
          <Row>
            <Col>
            <Card style={{ width: '100%' }}>
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {Details.slice(0,150)}
                    </Card.Text>
                  <Link to="/private"> <Button variant="primary">Get Service</Button></Link> 
                </Card.Body>
          </Card>
            </Col>
          </Row>
            </div>
            </Container>
        </div>
    );
};

export default Single;