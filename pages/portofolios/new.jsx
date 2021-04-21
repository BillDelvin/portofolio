import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import PortofolioForm from '@/components/PortofolioForm';
import withAuth from '../../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import { createPortofolio } from '@/actions/portofolio';

const PortofolioNew = ({ userData, userLoading }) => {
 const _createPortofolio = (data) => {
  createPortofolio(data);
 };

 return (
  <Layout user={userData} loading={userLoading}>
   <BasePage header="Create Portofolio">
    <Row>
     <Col md="8">
      <PortofolioForm onSubmit={_createPortofolio} />
     </Col>
    </Row>
   </BasePage>
  </Layout>
 );
};

export default withAuth(PortofolioNew)('admin');
