import { useRouter } from 'next/router';
import { Row, Col } from 'reactstrap';
import PortofolioCard from '@/components/PortofolioCard';
import { useGetUser } from '@/actions/user';
import PortofolioApi from '@/lib/api/portofolio';

import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';

const Portofolios = ({ portofolios }) => {
 const router = useRouter();
 const { data: dataUser, loading: loadingUser } = useGetUser();

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
       <PortofolioCard portofolio={portofolio} />
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
 };
}

export default Portofolios;
