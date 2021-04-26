import { Component, useState } from 'react';
import Link from 'next/link';
import { isAuthorized } from '../../utils/auth0';

import {
 Collapse,
 Navbar,
 NavbarToggler,
 Nav,
 NavItem,
 Dropdown,
 DropdownToggle,
 DropdownItem,
 DropdownMenu,
} from 'reactstrap';

const BsNavLink = ({ title, href, classname = '' }) => {
 return (
  <Link href={href}>
   <a className={`nav-link port-navbar-link ${classname}`}> {title} </a>
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

const AdminMenu = ({ dropdownOpen, adminToggle }) => {
 return (
  <Dropdown
   className="port-navbar-link port-dropdown-menu"
   nav
   isOpen={dropdownOpen}
   toggle={adminToggle}
  >
   <DropdownToggle className="port-dropdown-toggle" nav caret>
    Admin
   </DropdownToggle>
   <DropdownMenu right>
    <DropdownItem>
     <BsNavLink classname="port-dropdown-item" title="Create Portofolio" href="/portofolios/new" />
    </DropdownItem>
    <DropdownItem>
     <BsNavLink classname="port-dropdown-item" title="Blog Editor" href="/blogs/editor" />
    </DropdownItem>
    <DropdownItem>
     <BsNavLink classname="port-dropdown-item" title="Dashboard" href="/blogs/dashboard" />
    </DropdownItem>
   </DropdownMenu>
  </Dropdown>
 );
};

const Header = ({ user, loading, className }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const toggle = () => setIsOpen(!isOpen);
 const adminToggle = () => setDropdownOpen((prevState) => !prevState);

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
        <>
         {isAuthorized(user, 'admin') && (
          <AdminMenu dropdownOpen={dropdownOpen} adminToggle={adminToggle} />
         )}
         <NavItem className="port-navbar-item">
          <Logout />
         </NavItem>
        </>
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
