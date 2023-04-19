/* eslint-disable */
import React, { useState } from "react";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";

import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="topbar" id="top">
      <div className="header1 po-relative bg-dark">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              {/* <img src={logo} alt="monhosto" /> */}mon hosto
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="/">Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/find_hospital">Espace hôptital</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/contact_us">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-outline-danger" href="/sign-in">
                    Se connecter
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
