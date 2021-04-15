import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { withAuth } from '@/utils/auth0';

const OnlyAdminSSR = ({ user, title }) => {
 return (
  <Layout user={user} loading={false}>
   <BasePage>
    <h1>Im Admin SSR - hello {user && user.name}</h1>
    <h2>{title}</h2>
   </BasePage>
  </Layout>
 );
};

const getTitle = () => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({ title: 'my new title!' });
  }, 500);
 });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
 const title = await getTitle();
 return title;
})('admin');

export default OnlyAdminSSR;
