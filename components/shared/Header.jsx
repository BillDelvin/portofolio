import { Component } from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const BsNavLink = ({ title, href }) => {
 return (
  <Link href={href}>
   <a className="nav-link"> {title} </a>
  </Link>
 );
};

class Header extends Component {
 state = {
  isOpen: false,
 };

 toggle = () => this.setState({ isOpen: !this.state.isOpen });

 render() {
  return (
   <Navbar color="light" light expand="md">
    <NavbarBrand href="/">reactstrap</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
     <Nav className="mr-auto" navbar>
      <NavItem>
       <BsNavLink title="Home" href="/" />
      </NavItem>
      <NavItem>
       <BsNavLink title="About" href="/about" />
      </NavItem>
      <NavItem>
       <BsNavLink title="Portofolios" href="/portofolios" />
      </NavItem>
      <NavItem>
       <BsNavLink title="Blog" href="/blog" />
      </NavItem>
      <NavItem>
       <BsNavLink title="CV" href="/cv" />
      </NavItem>
     </Nav>
    </Collapse>
   </Navbar>
  );
 }
}

export default Header;
