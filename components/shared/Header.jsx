import { Component, useState } from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

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

const Login = () => (
 <a href="/api/v1/login" className="nav-link port-navbar-link">
  Login
 </a>
);

const Logout = () => (
 <a href="/api/v1/logout" className="nav-link port-navbar-link">
  Logout
 </a>
);

const Header = ({ user, loading, className }) => {
 const [isOpen, setIsOpen] = useState(false);
 const toggle = () => setIsOpen(!isOpen);

 return (
  <Navbar
   className={`port-navbar port-default absolute ${className}`}
   color="transparent"
   dark
   expand="md"
  >
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
     {/* <NavItem className="port-navbar-item">
      <BsNavLink title="Secret" href="/secret" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink href="/secretssr" title="SecretSSR" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="Admin" href="/onlyadmin" />
     </NavItem>
     <NavItem className="port-navbar-item">
      <BsNavLink title="AdminSSR" href="/onlyadminssr" />
     </NavItem> */}
    </Nav>
    <Nav navbar>
     {!loading && (
      <>
       {user && (
        <NavItem className="port-navbar-item">
         <Logout />
        </NavItem>
       )}
       {!user && (
        <NavItem className="port-navbar-item">
         <Login />
        </NavItem>
       )}
      </>
     )}
    </Nav>
   </Collapse>
  </Navbar>
 );
};

export default Header;
