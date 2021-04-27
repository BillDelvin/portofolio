import { useState } from 'react';
import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import { Row, Col, Button } from 'reactstrap';
import PortofolioCard from '@/components/PortofolioCard';
import { useGetUser } from '@/actions/user';
import { isAuthorized } from '../../utils/auth0';
import PortofolioApi from '@/lib/api/portofolio';
import { useDeletePortofolio } from '../../actions/portofolio';

const Portofolios = ({ portofolios: initialPortofolios }) => {
 const router = useRouter();
 const [portofolios, setPortofolios] = useState(initialPortofolios);
 const { data: dataUser, loading: loadingUser } = useGetUser();
 const [deletePortofolio, { data, error }] = useDeletePortofolio();

 const _deletePortofolio = async (e, id) => {
  e.stopPropagation();
  const isConfirm = confirm('Are you sure want to delete this portofolios?');
  if (isConfirm) {
   await deletePortofolio(id);
   const newPortofolios = portofolios.filter((portofolio) => portofolio._id !== id);
   setPortofolios(newPortofolios);
  }
 };

 return (
  <Layout user={dataUser} loading={loadingUser}>
   <BasePage header="Portofolios" className="portfolio-page">
    <Row md="3">
     {portofolios.map((portofolio) => (
      <Col
       key={portofolio._id}
       onClick={() => {
        router.push('/portofolios/[id]', `/portofolios/${portofolio._id}`);
       }}
      >
       <PortofolioCard portofolio={portofolio}>
        {dataUser && isAuthorized(dataUser, 'admin') && (
         <>
          <Button
           className="mr-3"
           color="warning"
           onClick={(e) => {
            e.stopPropagation();
            router.push('/portofolios/[id]/edit', `/portofolios/${portofolio._id}/edit`);
           }}
          >
           Edit
          </Button>
          <Button color="danger" onClick={(e) => _deletePortofolio(e, portofolio._id)}>
           Delete
          </Button>
         </>
        )}
       </PortofolioCard>
      </Col>
     ))}
    </Row>
   </BasePage>
  </Layout>
 );
};

// this function is called during the build time
// improved performance of page
// it will create static page with dynamic data
export async function getStaticProps() {
 const getData = await new PortofolioApi().getAll();
 const portofolios = getData.data;
 return {
  props: { portofolios },
  revalidate: 1,
 };
}

export default Portofolios;
