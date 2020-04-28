import React from 'react';
import styled from 'styled-components';
import { Third } from '../const/color';
import Layout from '../layouts';

export default () => (
  <Layout>
    <_H1>Skill</_H1>
    <_Section>
      <_H2>Language</_H2>
      <_Table>
        <tbody>
          <tr>
            <_Th>Front</_Th>
            <_Td>HTML, CSS, JavaScript, TypeScript</_Td>
          </tr>
          <tr>
            <_Th>Server</_Th>
            <_Td>Go, C, PHP</_Td>
          </tr>
        </tbody>
      </_Table>
    </_Section>
    <_Section>
      <_H2>FW, Lib, Others</_H2>
      <_Table>
        <tbody>
          <tr>
            <_Th>Front</_Th>
            <_Td>React, Redux, GatsbyJS</_Td>
          </tr>
          <tr>
            <_Th>Server</_Th>
            <_Td>Gin, Lumen, Laravel</_Td>
          </tr>
          <tr>
            <_Th>Infra</_Th>
            <_Td>AWS, Kubernetes, CircleCI</_Td>
          </tr>
          <tr>
            <_Th>Design</_Th>
            <_Td>Figma</_Td>
          </tr>
          <tr>
            <_Th>Others</_Th>
            <_Td>gRPC, GraphQL</_Td>
          </tr>
        </tbody>
      </_Table>
    </_Section>
    <_ExSection>
      <_H2>Ex.</_H2>
      <ul>
        <_Li>
          株式会社CA Tech Kids School
          <br />
          2019 - 04 〜 2019 - 10
        </_Li>
        <_Li>
          株式会社コンビーズ
          <br />
          2019 - 10 〜 2020 - 04
        </_Li>
      </ul>
    </_ExSection>
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
  margin: 0 auto;
  margin-top: 2em;
`;
const _H2 = styled.h2`
  margin-bottom: 0.5em;
`;
const _Table = styled.table`
  width: 100%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }

  border-collapse: collapse;
`;
const _Th = styled.th`
  padding: 1em;

  border: solid 1px ${Third};
  text-align: left;
  font-weight: normal;
`;
const _Td = styled(_Th)``;
const _ExSection = styled(_Section)`
  margin-bottom: 2em;
`;
const _Li = styled.li`
  margin-bottom: 1em;
`;
