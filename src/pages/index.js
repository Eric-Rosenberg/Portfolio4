import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div css="height: calc(100vh - 8rem); display: flex; flex-direction: column; align-items: center; justify-content: center">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  </Layout>
);

export default IndexPage;
