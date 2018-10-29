import React from 'react';
import Tabs from '../components/tabs';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div css="height: calc(100vh - 8rem); display: flex; flex-direction: column; align-items: center; justify-content: center">
      <Tabs />
    </div>
  </Layout>
);

export default IndexPage;
