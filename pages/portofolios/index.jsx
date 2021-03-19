import Link from 'next/link';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useGetData } from '@/actions';

const Portofolios = () => {
 const { data, error, loading } = useGetData();

 const renderPosts = (posts) => {
  return posts.map((post) => (
   <li key={post.id}>
    <Link as={`/portofolios/${post.id}`} href="/portofolios/[id]">
     <a> {post.title} </a>
    </Link>
   </li>
  ));
 };

 // const isData =
 //  posts.length !== 0 && !error ? (
 //   <ul>{renderPosts(posts)}</ul>
 //  ) : (
 //   <div className="alert alert-danger">{error.message}</div>
 //  );

 return (
  <Layout>
   <BasePage>
    <h1>im Portofolios</h1>
    {/* {isData} */}
    {loading && <p>Loading Data....</p>}
    {data && <ul>{renderPosts(data)}</ul>}
    {error && <div className="alert alert-danger">{error.message}</div>}
   </BasePage>
  </Layout>
 );
};

export default Portofolios;
