import React from 'react';
import {
    Link
  } from "react-router-dom";
  import { Navbar, Nav, NavItem } from "react-bootstrap";
  import { Dropdown } from 'semantic-ui-react'


function Navbar_footer(props){


    return(
        <>
    <Navbar className="site_header"collapseOnSelect expand="lg">
          <Navbar.Brand className="image_logo" as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavItem href="/">
                <Nav.Link as={Link} to="/">
                {props.t("nav.home")}
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Produktion">
                {props.t("nav.production")}
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Montage">
                {props.t("nav.montage")}
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Projekter">
                {props.t("nav.projects")}
                </Nav.Link>
              </NavItem>
              <NavItem href="/">
                <Nav.Link as={Link} to="/Kontakt">
                {props.t("nav.contact")}
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        
        <div className="drop_down_langauge">
  <Dropdown
    placeholder='Select Country'
    onChange={props.handleChange}
    selection
    defaultValue={'en'}
    options={props.countryOptions}
    
    /></div></Navbar>
            </>
  );
};


export default Navbar_footer;