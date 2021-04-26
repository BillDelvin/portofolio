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

export default PortofoliosDetail;
