import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';
import { useGetDataById } from '@/actions';

const PortofoliosDetail = () => {
 const router = useRouter();
 const { data: post, error, loading } = useGetDataById(router.query.id);
 const { data: dataUser, loading: loadingUser } = useGetUser();

 return (
  <Layout user={dataUser} loading={loadingUser}>
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
