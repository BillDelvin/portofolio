import { useEffect, useState } from 'react';
import Link from 'next/link';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';

const useGetPortofolio = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  async function getPosts() {
   const res = await fetch('/api/v1/posts');
   const data = await res.json();
   setPosts(data);
  }

  getPosts();
 }, []);

 return { posts };
};

const Portofolios = () => {
 const { posts } = useGetPortofolio();

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

export default Portofolios;
