import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBarUsed() {
    return (
        <>
            <Navbar expand="lg" className="ms-2 p-0" >
                <Navbar.Brand as={Link} to="/">Santiago Aquino</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-3">
                        <Nav.Link as={Link} to="/beauty">Beauty</Nav.Link>
                        <Nav.Link as={Link} to="/retratos">Retratos</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>          
        </>
    );
};