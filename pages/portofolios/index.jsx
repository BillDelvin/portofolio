import Link from 'next/link';
import { useGetUser } from '@/actions/user';
import { useGetData } from '@/actions';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';

const Portofolios = () => {
 const { data, error, loading } = useGetData();
 const { data: dataUser, loading: loadingUser } = useGetUser();

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
  <Layout user={dataUser} loading={loadingUser}>
   <BasePage>
    <h1>im Portofolios</h1>
    {loading && <p>Loading Data....</p>}
    {data && <ul>{renderPosts(data)}</ul>}
    {error && <div className="alert alert-danger">{error.message}</div>}
   </BasePage>
  </Layout>
 );
};

export default Portofolios;
