import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function NavbarCustom({page}) {
  return (
    <div className="Navbar">
      <Navbar  expand="md">
        <NavbarBrand href="/">Samuel Mahan</NavbarBrand>
        <NavbarToggler onClick={() => {}} />
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarText>
              Software Developer
            </NavbarText>
            <NavItem>
              <NavLink href="">Email</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;