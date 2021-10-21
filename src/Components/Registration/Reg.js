import { Container, Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './reg.css'


const Reg = () => {

  
  const {signInWithGoogle,handelEmail, handelPass, reghandler,regInwithEmail,handelText} = useFirebase()
    return (
        <div>
         
        <Container>
        <div  className="form">
            <h1>Please Registration</h1>
        <Form onSubmit={reghandler}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={handelText} type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handelPass} type="password" placeholder="Password" required />
            </Form.Group>
            <div className="login">
            <Button onClick= {regInwithEmail} variant="primary" type="submit">
                Register
            </Button>
            </div>
            <div className="loginwithgoogle">
           <button onClick= {signInWithGoogle} >Log in with Google</button>
           </div> 
        </Form>
        <br /> 
        <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
        </Container>
        </div>
    );
};

export default Reg;