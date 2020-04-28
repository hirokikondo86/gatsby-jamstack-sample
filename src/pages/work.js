import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';

export default () => (
  <Layout>
    <_H1>Work</_H1>
    <_Section>
      <p style={{ height: '250px', backgroundColor: 'red' }}>
        <img src="" alt="" />
      </p>
      <h1 style={{ fontWeight: 'normal' }}>THINK!</h1>
      <p style={{ fontSize: '0.75em' }}># TypeScript, React, Go, gRPC, AWS, CircleCI</p>
    </_Section>
    <_Section>
      <p style={{ height: '250px', backgroundColor: 'red' }}>
        <img src="" alt="" />
      </p>
      <h1 style={{ fontWeight: 'normal' }}>THINK!</h1>
      <p style={{ fontSize: '0.75em' }}># TypeScript, React, Go, gRPC, AWS, CircleCI</p>
    </_Section>
  </Layout>
);

const _H1 = styled.h1`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 0 auto;
  margin-top: 1.5em;
`;
const _Section = styled.section`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 2em auto;
`;
