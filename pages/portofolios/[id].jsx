import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useGetDataById } from '@/actions';

const PortofoliosDetail = () => {
 const router = useRouter();
 const { data: post, error, loading } = useGetDataById(router.query.id);

 return (
  <Layout>
   <BasePage>
    {loading && <p>Loading Data....</p>}
    {post && (
     <div>
      <h1>Im portofolio detail</h1>
      <h1>{post.title}</h1>
      <p>body : {post.body}</p>
      <p>id : {post.id}</p>
     </div>
    )}
    {error && <div className="alert alert-danger">{error.message}</div>}
   </BasePage>
  </Layout>
 );
};

export default PortofoliosDetail;
