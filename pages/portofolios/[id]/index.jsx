import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';
import PortofolioApi from '../../../lib/api/portofolio';

const PortofoliosDetail = ({ portofolio }) => {
 const router = useRouter();
 const { data: dataUser, loading: loadingUser } = useGetUser();

 return (
  <Layout user={dataUser} loading={loadingUser}>
   <BasePage header="Portofolio Detail">{JSON.stringify(portofolio)}</BasePage>
  </Layout>
 );
};

// export async function getServerSideProps({ query }) {
//  const getData = await new PortofolioApi().getById(query.id);
//  const portofolio = getData.data;
//  return { props: { portofolio } };
// }

// this function execute at the build time
export async function getStaticPaths() {
 const getData = await new PortofolioApi().getAll();
 const portofolios = getData.data;

 // get the paths we want pre-render based on portofolio ID
 const paths = portofolios.map((portofolio) => {
  return {
   params: { id: portofolio._id },
  };
 });

 // fallback: false mean that not found pages will be resolved to 404 page
 return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
 const getData = await new PortofolioApi().getById(params.id);
 const portofolio = getData.data;
 return { props: { portofolio } };
}

export default PortofoliosDetail;
