import { Navbar, Nav} from 'react-bootstrap';

import logo from "../../assets/pictures/logo/logo.png";
import "./header.css";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" style={{background:"transparent !important"}}>
            <Navbar.Brand className="logo" target="_blanck" href="https://www.linkedin.com/in/c%C3%A9dric-lautard-9849b1a4/"><img src={logo} width="75px" height="75px" alt="cl"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav>
                    <Nav.Link className="nav-link" href="/home">ACCUEIL</Nav.Link>
                    <Nav.Link className="nav-link" href="/skills">COMPETENCES</Nav.Link>
                    <Nav.Link className="nav-link" href="/services">SERVICES</Nav.Link>
                    <Nav.Link className="nav-link" href="/contact">CONTACTS</Nav.Link>
                    <Nav.Link className="nav-link" href="/test">TEST</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
export default Header;