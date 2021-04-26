import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '../../../hoc/withAuth';
import { useGetPortofolio, useUpdatedPortofolio } from '../../../actions/portofolio';
import PortofolioForm from '@/components/PortofolioForm';
import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

const PortofolioEdit = ({ user }) => {
 const router = useRouter();
 const [updatedPortofolio, { error }] = useUpdatedPortofolio();
 const { data: initialData } = useGetPortofolio(router.query.id);
 const _updatedPortofolio = async (data) => {
  // try {
  //  await updatedPortofolio(router.query.id, data);
  //  toast.success('Portofolio have been updated!', { autoClose: 3000 });
  // } catch (error) {
  //  toast.error('Oops some error!', { autoClose: 3000 });
  // }
  await updatedPortofolio(router.query.id, data)
   .then(() => {
    toast.success('Portofolio have been updated!', { autoClose: 3000 });
   })
   .catch(() => {
    toast.error('Oops some error!', { autoClose: 3000 });
   });
 };
 return (
  <Layout user={user} loading={false}>
   <BasePage header="Portofolio Edit">
    <Row>
     <Col md="8">
      {initialData && (
       <PortofolioForm
        initalUpdateData={initialData}
        onSubmit={(data) => _updatedPortofolio(data)}
       />
      )}
      {error && <div className="alert alert-danger mt-2">{error}</div>}
     </Col>
    </Row>
   </BasePage>
  </Layout>
 );
};

export default withAuth(PortofolioEdit)('admin');
