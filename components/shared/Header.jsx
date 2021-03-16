import { Component, Fragment } from 'react';
import Link from 'next/link';

class Header extends Component {
 render() {
  return (
   <Fragment>
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
   </Fragment>
  );
 }
}

export default Header;
