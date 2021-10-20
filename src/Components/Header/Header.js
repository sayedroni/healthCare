import React from 'react';
import { Container,  Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter,Switch,Route, NavLink } from 'react-router-dom';
import Authprovider from '../../Contex/Authprovider';
import useFirebase from '../../Hooks/useFirebase';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Getservice from '../Getservice/Getservice';
import Login from '../Login/Login';
import Notfound from '../Notfound/Notfound';
import Privateroute from '../PrivateRoute/Privateroute';
import Services from '../Service/Services';
import Reg from '../Registration/Reg';
import './header.css'
const Header = () => {
  const {user,logOut} = useFirebase();
    return (
        <div>
     
      <Authprovider>
      <BrowserRouter>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MEDICARE HOSPITAL</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to="/home"activeStyle={{color:"red"}}>Home</NavLink>
      <NavLink to="/Services"activeStyle={{color:"red"}}>Services</NavLink>
      <NavLink to="/About"activeStyle={{color:"red"}}>About Us</NavLink>
      <NavLink to="/Appoinment"activeStyle={{color:"red"}}>Get Appoinment</NavLink>
    </Nav>
    <Nav>
      <div className="logInlogOut">
    
     { 
        user.email ?
        <button onClick={logOut}>Log out</button>
        :
     <NavLink className="logOut" to="/login"activeStyle={{color:"white"}}>Login</NavLink>
     } 
        <span>{user.displayName}</span>
     </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <Switch>
      <Route path="/home">
      <div className="img">
          <Container className="header-content">
            <h1>Our Hospital is the best</h1>
            <p>Our hospital provide best services.This is the <br /> best hospital this town</p>
            <button>Learn More</button>
        </Container>
      </div>
        <Services></Services>
        <About></About>
        <Footer></Footer>
      </Route>
      <Route exact path="/">
      <div className="img">
          <Container className="header-content">
            <h1>Our Hospital is the best</h1>
            <p>Our hospital provide best services.This is the <br /> best hospital this town</p>
            <button>Learn More</button>
        </Container>
      </div>
        <Services></Services>
        <About></About>
        <Footer></Footer>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/reg">
        <Reg></Reg>
      </Route>
      <Privateroute path="/private">
        <Getservice></Getservice>
      </Privateroute>
      <Privateroute path="/Appoinment">
      <Getservice></Getservice>
      </Privateroute>
      <Route path="*">
        <Notfound></Notfound>
      </Route>
    </Switch>
  </BrowserRouter>
      </Authprovider>
        </div>
    );
};

export default Header;