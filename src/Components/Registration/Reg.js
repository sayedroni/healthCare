import { Container, Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './reg.css'


const Reg = () => {

  const reghandler = ()=>{
    console.log('registration')
  }
  const {signInWithGoogle} = useFirebase()
    return (
        <div>
         
        <Container>
        <div  className="form">
            <h1>Please Registration</h1>
        <Form onClick={reghandler}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur="" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur="" type="password" placeholder="Password" required />
            </Form.Group>
            <div className="login">
            <Button onClick= "" variant="primary" type="submit">
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