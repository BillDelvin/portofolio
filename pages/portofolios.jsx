import { Component } from 'react';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes';

import Layout from '../components/Layout';
import BasePage from '../components/BasePage';

class Portofolios extends Component {
 static async getInitialProps() {
  let posts = [];
  try {
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
   posts = res.data;
  } catch (error) {
   console.log(error);
  }

  return { posts: posts.slice(0, 10) };
 }

 renderPosts(posts) {
  return posts.map((post) => (
   <li key={post.id}>
    <Link route={`/portofolios/${post.id}`}>
     <a> {post.title} </a>
    </Link>
   </li>
  ));
 }

 render() {
  const { posts } = this.props;
  return (
   <Layout>
    <BasePage>
     <h1>im Portofolios</h1>
     <ul>{this.renderPosts(posts)}</ul>
    </BasePage>
   </Layout>
  );
 }
}

export default Portofolios;
