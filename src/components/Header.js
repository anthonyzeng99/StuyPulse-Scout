import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">StuyPulse Scout</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Teams
      </NavItem>
      <NavItem eventKey={2} href="#">
        Competitions
      </NavItem>
      <NavItem eventKey={2} href="#">
        Matches
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
