import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import withAuth from '../../../hoc/withAuth';
import { Editor } from 'slate-simple-editor';

const BlogEditor = ({ user, loading }) => {
 const saveBlog = (data) => {
  console.log(data);
 };

 return (
  <Layout user={user} loading={loading}>
   <BasePage>
    <Editor onSave={saveBlog} />
   </BasePage>
  </Layout>
 );
};

export default withAuth(BlogEditor)('admin');
