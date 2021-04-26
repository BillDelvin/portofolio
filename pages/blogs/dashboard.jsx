import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '../../hoc/withAuth';

const Dashboard = ({ user, loading }) => {
 return (
  <Layout user={user} loading={loading}>
   <BasePage header="Dashboard"></BasePage>
  </Layout>
 );
};

export default withAuth(Dashboard)('admin');
