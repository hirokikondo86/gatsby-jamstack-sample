import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Layout from '../layouts';

export default ({ data }) => {
  const {
    allContentfulPost: { edges },
  } = data;
  const posts = edges.map((edge) => edge.node);

  return (
    <Layout>
      <_Article>
        <h1>Work</h1>
        <p style={{ marginTop: '0.5em' }}>過去に開発した主なプロダクト一覧</p>
        {posts.map((post, i) => (
          <_Section key={i}>
            <$Link to={`/work/${post.id}`}>
              <h1>{post.title}</h1>
              <p style={{ marginBottom: '0.25em' }}>{post.description}</p>
              <p style={{ fontSize: '0.75em' }}># {post.technology}</p>
            </$Link>
          </_Section>
        ))}
      </_Article>
    </Layout>
  );
};

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

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          title
          description
          technology
        }
      }
    }
  }
`;
