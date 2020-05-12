import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary, Secondary } from '../const/color';
import Layout from '../layouts';

export default ({ data }) => {
  const post = data.contentfulPost;

  return (
    <Layout>
      <_Div>
        <$Link to="/work">← Back</$Link>
      </_Div>
      <_Article>
        <_Section>
          <p style={{ marginBottom: '0.75em' }}>
            <img src={post.image[0].file.url} alt="Image image of this Product" />
          </p>
          <h1>{post.title}</h1>
          <p style={{ fontSize: '0.75em', marginBottom: '2em' }}># {post.technology}</p>
          <_Button>
            {post.demo === '0' ? '' : <_A href={post.demo}>Demo</_A>}
            {post.github === '0' ? '' : <_A href={post.github}>GitHub</_A>}
            {post.qiita === '0' ? '' : <_A href={post.qiita}>Qiita</_A>}
          </_Button>
          <p>{post.descriptionDetail.descriptionDetail}</p>
        </_Section>
      </_Article>
    </Layout>
  );
};

const _Div = styled.div`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 0 auto;
  margin-top: 1.5em;
`;
const $Link = styled(Link)`
  color: ${Primary};
  text-decoration: none;
`;
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
const _Button = styled.div`
  margin-bottom: 2em;
`;
const _A = styled.a`
  padding: 0.25em;
  margin-right: 0.75em;

  font-size: 0.9em;
  background-color: ${Primary};
  color: ${Secondary};
  text-decoration: none;
`;

export const query = graphql`
  query($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      title
      description
      technology
      descriptionDetail {
        descriptionDetail
      }
      image {
        file {
          url
        }
      }
      demo
      github
      qiita
    }
  }
`;
