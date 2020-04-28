import { Link } from 'gatsby';
import React from 'react';
import Layout from '../layouts';

export default () => (
  <Layout>
    <h1 style={{ margin: '1.5em 0', textAlign: 'center' }}>Page not found</h1>
    <p style={{ marginBottom: '2em', textAlign: 'center' }}>
      Oops! The page you are looking for has been removed or relocated.
    </p>
    <p style={{ textAlign: 'center' }}>
      <Link style={{ textDecoration: 'none' }}>Go Back</Link>
    </p>
  </Layout>
);
