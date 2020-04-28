import React from 'react';
import styled from 'styled-components';
import { Third } from '../const/color';
import Icon from '../images/icon/Icon2.png';
import Layout from '../layouts';

export default () => (
  <Layout>
    <_H1>About</_H1>
    <_Flex>
      <p>
        <img src={Icon} alt="The author is brushing his teeth" />
      </p>
      <_SpaceBetween>
        <p>
          <_Span>Web Developer</_Span>
        </p>
        <_Name>近藤大暉</_Name>
        <p>
          <_Span>Hiroki Kondo</_Span>
        </p>
      </_SpaceBetween>
    </_Flex>
    <_Section>
      <_Table>
        <tbody>
          <tr>
            <_Th>Birthday</_Th>
            <_Td>1997 / 08 / 06</_Td>
          </tr>
          <tr>
            <_Th>Belong</_Th>
            <_Td>HAL大阪 Web開発学科 22卒</_Td>
          </tr>
          <tr>
            <_Th>Hobby</_Th>
            <_Td>バスケ・アメフト・筋トレ・少年ジャンプ</_Td>
          </tr>
        </tbody>
      </_Table>
    </_Section>
    <section>
      <_P>
        Web開発が好きで、特にモダンな技術が大好きです。
        <br />
        学習・専門領域は特に決めておらず、興味が沸けばフロント・サーバー・インフラ・デザインなど、領域関係なく全部やっちゃいます。
        <br />
        また、実装だけでなく設計やプレゼンなどの工程も好きな自称何でも屋です。
      </_P>
    </section>
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
const _Flex = styled.div`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 3em;
`;
const _SpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2em;
`;
const _Name = styled.p`
  font-size: 2em;
  letter-spacing: 0.2em;
`;
const _Span = styled.span`
  font-size: 0.875em;
  font-color: ${Third};
`;
const _Section = styled.section`
  margin: 3em auto;
`;
const _Table = styled.table`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 0 auto;

  border-collapse: collapse;
`;
const _Th = styled.th`
  padding: 1em;

  border: solid 1px ${Third};
  text-align: left;
  font-weight: normal;
`;
const _Td = styled(_Th)``;
const _P = styled.p`
  width: 85%;
  @media screen and (min-width: 500px) {
    width: 450px;
  }
  margin: 0 auto;
  margin-bottom: 2.5em;
`;
