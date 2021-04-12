import { useGetUser } from '../actions/user';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useGetDataById } from '@/actions';

const PortofoliosDetail = () => {
 const { data: post, error, loading } = useGetDataById(router.query.id);
 const { data, loading } = useGetUser();

 return (
  <Layout user={data} loading={loading}>
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
