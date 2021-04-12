import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '../actions/user';

const Blog = () => {
 const { data, loading } = useGetUser();

 return (
  <Layout user={data} loading={loading}>
   <BasePage>
    <h1>im blog</h1>
   </BasePage>
  </Layout>
 );
};

export default Blog;
