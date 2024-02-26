'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export const Header = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/quotes">Quotes</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/popular">Popular</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
  )
}
