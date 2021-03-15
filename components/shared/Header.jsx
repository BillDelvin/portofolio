import { Component, Fragment } from 'react';
import Link from 'next/link';

class Header extends Component {
 render() {
  return (
   <Fragment>
    <p className="customeClass">styled element P</p>
    <p>styled element P</p>
    <Link href="/">
     <a>Home</a>
    </Link>
    <Link href="/about">
     <a>About</a>
    </Link>
    <Link href="/portofolios">
     <a>Portofolios</a>
    </Link>
    <Link href="/blog">
     <a>Blogs</a>
    </Link>
    <Link href="/cv">
     <a>CV</a>
    </Link>
    <style jsx>
     {`
      .customeClass {
       color: red;
      }
     `}
    </style>
   </Fragment>
  );
 }
}

export default Header;
