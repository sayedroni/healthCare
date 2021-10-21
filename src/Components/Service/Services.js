
import React, { useEffect, useState } from 'react';
import {Container,} from 'react-bootstrap';
import Single from '../SingelService/Single';
import './service.css'

const Services = () => {
    const [service,setservice] = useState([]);
    useEffect(()=>{
        fetch('https://sayedroni.github.io/myapidata/mydata.json')
        .then(res => res.json())
        .then(data => setservice(data))
    },[])
    return (
        <div id="Services">
            <Container className="service">
            <h1>Our All Services</h1>
            <div className="mycard">
            {
                service.map(ourservice=> <Single key = {ourservice.id}
                    ourservice={ourservice}> 
                    </Single>)      
            }
         
            </div>
            </Container>
        </div>
    );
};

export default Services;