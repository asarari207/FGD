import React from 'react'
import Cookies from 'js-cookie'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Decoder from 'jwt-decode';
import './dropdown.css'

export default function Navbarx() {

  var token = Cookies.get("-session-")
  const User = Decoder(token);

  const Logout = () => {
    Cookies.remove("-session-")
    window.location.reload()
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Jawwal<sup>4G</sup></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => Logout()}>Logoff</Nav.Link>
            <Nav.Link>{User.Username}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container>   
      <div className="dropdown">
        <span>Mouse over me</span>
        <div className="dropdown-content">
        <a href="/WBPL">WestBank pole</a>
        <br />
        <a href="/TGML">WestBank Modernization</a>
        <br />
        <a href="GZPL">Gaza pole</a>
        <br />
        <a href="ACL">Gaza AC</a>
        </div>
      </div>
      </Container>
      <br />
    </div>
  )
}
