import { useGetUser } from '../actions/user';
import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';

const CV = () => {
 const { data, loading } = useGetUser();

 return (
  <Layout user={data} loading={loading}>
   <BasePage>
    <h1>im CV</h1>
   </BasePage>
  </Layout>
 );
};

export default CV;
