import React from 'react';
import { Button,Card, Container,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './single.css'

const Single = (props) => {
    const {title,image,Details} = props.ourservice
    return (
        <div>
            <Container className="Mycard">
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {Details.slice(0,75)}
                    </Card.Text>
                  <Link to="/private"> <Button variant="primary">Get Service</Button></Link> 
                </Card.Body>
                </Card>
            </div>
            </Container>
        </div>
    );
};

export default Single;