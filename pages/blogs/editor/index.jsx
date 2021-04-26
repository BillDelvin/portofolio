import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '../../../hoc/withAuth';

const BlogEditor = ({ user, loading }) => {
 return (
  <Layout user={user} loading={loading}>
   <BasePage header="Blog Editor"></BasePage>
  </Layout>
 );
};

export default withAuth(BlogEditor)('admin');
