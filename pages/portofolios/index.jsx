import axios from 'axios';
import Link from 'next/link';

import Layout from '../../components/Layout';
import BasePage from '../../components/BasePage';

const Portofolios = (props) => {
 const { posts } = props;

 const renderPosts = (posts) => {
  return posts.map((post) => (
   <li key={post.id}>
    <Link as={`/portofolios/${post.id}`} href="/portofolios/[id]">
     <a> {post.title} </a>
    </Link>
   </li>
  ));
 };

 return (
  <Layout>
   <BasePage>
    <h1>im Portofolios</h1>
    <ul>{renderPosts(posts)}</ul>
   </BasePage>
  </Layout>
 );
};

Portofolios.getInitialProps = async () => {
 let posts = [];
 try {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  posts = res.data;
 } catch (error) {
  console.log(error);
 }

 return { posts: posts.slice(0, 10) };
};

export default Portofolios;
