import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Layout from '../layouts';

export default () => (
  <Layout>
    <_Article>
      <h1>Work</h1>
      <p>過去に制作した主なプロダクト一覧</p>
      <_Section>
        <$Link>
          <h1>THINK!</h1>
          <p style={{ marginBottom: '0.25em' }}>
            リアルタイムにアイデアを共有できるオンラインブレインストーミングツール
          </p>
          <p style={{ fontSize: '0.75em' }}># TypeScript, React, Go, gRPC, AWS, CircleCI</p>
        </$Link>
      </_Section>
      <_Section>
        <h1>Portfolio</h1>
        <p style={{ marginBottom: '0.25em' }}>Lighthouse満点のポートフォリオ</p>
        <p style={{ fontSize: '0.75em' }}># TypeScript, React, Go, gRPC, AWS, CircleCI</p>
      </_Section>
    </_Article>
  </Layout>
);

const _Article = styled.article`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 0 auto;
  margin-top: 1.5em;
`;
const _Section = styled.section`
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  padding-bottom: 1.5em;
  margin: 2em auto;

  border-bottom: solid 1px ${Primary};
`;
const $Link = styled(Link)`
  color: ${Primary};
  text-decoration: none;
`;
