import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './get.css'

const Getservice = () => {
    return (
        <div className="getheading">
            <h1>For get service take Appoinment</h1>
            <div  className="get">
            <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur="" type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onBlur="" type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control onBlur="" type="text" placeholder="Enter Address" required />
            </Form.Group>

    
            <div className="login">
            <Button variant="primary" type="submit">
               Get Appoinment
            </Button>
            </div>
 
        </Form>
        </div>
        </div>
    );
};

export default Getservice;