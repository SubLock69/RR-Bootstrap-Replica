import {Navbar, Nav, Button} from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        {/* Logo taken directly from instacart website for their navbar*/}
        <img width="33%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/2560px-Instacart_logo_and_wordmark.svg.png" alt="Logo" /> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}