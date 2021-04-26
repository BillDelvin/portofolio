import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import PortofolioForm from '@/components/PortofolioForm';
import withAuth from '../../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import { useCreatePortofolio } from '@/actions/portofolio';
import Redirect from '../../components/shared/Redirect';

const PortofolioNew = ({ user: userData, userLoading }) => {
 const [createPortofolio, { data, loading, error }] = useCreatePortofolio();
 if (data) {
  return <Redirect to="/portofolios" />;
 }

 return (
  <Layout user={userData} loading={userLoading}>
   <BasePage header="Create Portofolio">
    <Row>
     <Col md="8">
      <PortofolioForm onSubmit={createPortofolio} />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
     </Col>
    </Row>
   </BasePage>
  </Layout>
 );
};

export default withAuth(PortofolioNew)('admin');
