import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '../../../hoc/withAuth';
import { useGetPortofolio } from '../../../actions/portofolio';
import PortofolioForm from '@/components/PortofolioForm';
import { Row, Col } from 'reactstrap';

const PortofolioEdit = ({ user }) => {
 const router = useRouter();
 const { data } = useGetPortofolio(router.query.id);
 return (
  <Layout user={user} loading={false}>
   <BasePage header="Portofolio Edit">
    <Row>
     <Col md="8">
      {data && (
       <PortofolioForm initalUpdateData={data} onSubmit={(data) => alert(JSON.stringify(data))} />
      )}
     </Col>
    </Row>
   </BasePage>
  </Layout>
 );
};

export default withAuth(PortofolioEdit)('admin');
