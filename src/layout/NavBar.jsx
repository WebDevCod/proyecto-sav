import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand className='navbar-brand' href='/'>
        Santiago Aquino
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls='basic-navbar-nav'
        style={{ border: 'none' }}
      />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='nav-link justify-content-end flex-grow-1'>
          <Nav.Link as={Link} to='/beauty'>
            Beauty
          </Nav.Link>
          <Nav.Link as={Link} to='/retratos'>
            Retratos
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
