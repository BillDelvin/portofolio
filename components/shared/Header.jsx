import { Component, useState } from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const BsNavLink = ({ title, href }) => {
 return (
  <Link href={href}>
   <a className="nav-link port-navbar-link"> {title} </a>
  </Link>
 );
};

const BsNavBrand = () => (
 <Link href="/">
  <a className="navbar-brand port-navbar-brand">Bill Delvin</a>
 </Link>
);

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

 return (
  <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
   <BsNavBrand />
   <NavbarToggler onClick={toggle} />
   <Collapse isOpen={isOpen} navbar>
    <Nav className="mr-auto" navbar>
     <NavItem className="port-navbar-item">
      <BsNavLink title="Home" href="/" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="About" href="/about" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="Portofolios" href="/portofolios" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="Blog" href="/blog" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="CV" href="/cv" />
     </NavItem>
    </Nav>
   </Collapse>
  </Navbar>
 );
};

export default Header;
