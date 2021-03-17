import { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { withRouter } from 'next/router';

import BasePage from '../components/BasePage';

class PortofoliosDetail extends Component {
 static async getInitialProps({ query }) {
  let post = {};
  try {
   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
   post = res.data;
  } catch (error) {
   console.log(error);
  }

  return { post };
 }

 render() {
  const { post } = this.props;
  return (
   <Layout>
    <BasePage>
     <h1>Im portofolio detail</h1>
     <h1>{post.title}</h1>
     <p>body : {post.body}</p>
     <p>id : {post.id}</p>
    </BasePage>
   </Layout>
  );
 }
}

export default withRouter(PortofoliosDetail);
