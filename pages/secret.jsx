import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const Secret = ({ user, loading }) => {
 return (
  <Layout user={user} loading={loading}>
   <BasePage>
    <h1>Im secret page - hello {user.name}</h1>
   </BasePage>
  </Layout>
 );
};

// High Order Component - HOC
// Simple function that return news component and return new
// component with some extended func

// can use this
// function withAuth(Component) {
//  return (props) => {
//   return <Component title="hello world" {...props} />;
//  };
// }

// modern syntax
// const withAuth = (Component) => (props) => <Component title="hello world" {...props} />;

export default withAuth(Secret)();
