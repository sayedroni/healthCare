import { Container, Form,Button } from 'react-bootstrap';
import './login.css'
import '../Registration/reg.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




const Login = () =>{
    const {signInWithGoogle,signInwithEmail} = useAuth()
    return (
        <div>
         
        <Container>
        <div  className="form">
            <h1>Please Login</h1>
        <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur="" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur="" type="password" placeholder="Password" required />
            </Form.Group>
            <div className="login">
            <Button onClick= {signInwithEmail} variant="primary" type="submit">
                Log In
            </Button>
            </div>
            <div className="loginwithgoogle">
           <button onClick= {signInWithGoogle} >Log in with Google</button>
           </div> 
        </Form>
        <br /> 
        <p>New user? <Link to="/reg">Sign In</Link></p>
        </div>
        </Container>
        </div>
    );
};

export default Login;