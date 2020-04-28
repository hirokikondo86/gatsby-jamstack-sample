import React from 'react';
import styled from 'styled-components';
import Title from '../images/title/About.png';
import Layout from '../layouts';

export default () => (
  <Layout>
    <$H1>
      <img src={Title} alt="Title for About" />
    </$H1>
  </Layout>
);

const $H1 = styled.h1`
  margin: 0 auto;
`;
