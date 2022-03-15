import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Navbar, Nav, NavItem } from "react-bootstrap";

function Navbar_footer(){
    return(
    <Navbar className="site_header"collapseOnSelect expand="lg">
          <Navbar.Brand className="image_logo" as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavItem href="/">
                <Nav.Link as={Link} to="/">
                Forside
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Produktion">
                Produktion
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Montage">
                Montage
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Projekter">
                Projekter
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Kontakt">
                Kontakt
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
};

export default Navbar_footer