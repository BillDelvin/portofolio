import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import WithAuth from '@/hoc/withAuth';

const OnlyAdmin = ({ user, loading }) => {
 return (
  <Layout user={user} loading={loading}>
   <BasePage>
    <h1>im Admin page - hello {user.name}</h1>
   </BasePage>
  </Layout>
 );
};

export default WithAuth(OnlyAdmin)('admin');
