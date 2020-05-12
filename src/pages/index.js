import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Icon from '../images/Icon.png';
import GitHub from '../images/GitHub.png';
import Instagram from '../images/Instagram.png';
import Qiita from '../images/Qiita.png';
import Twitter from '../images/Twitter.png';
import SEO from '../components/SEO';

export default () => (
  <_Root>
    <SEO />
    <_Flex>
      <_Icon>
        <_Img src={Icon} alt="The author is brushing his teeth" />
      </_Icon>
      <_Name>Hiroki Kondo</_Name>
      <_P>Web Developer</_P>
      <_Ul>
        <li>
          <a href="https://github.com/hirokikondo86">
            <_SNS src={GitHub} alt="GitHub logo" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KHiroki86_">
            <_SNS src={Twitter} alt="Twitter logo" />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/hirokikondo86">
            <_SNS src={Qiita} alt="Qiita logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/khiroki_86/?hl=ja">
            <_SNS src={Instagram} alt="Instagram logo" />
          </a>
        </li>
      </_Ul>
    </_Flex>
    <_Nav>
      <_Ul>
        <li>
          <$Link to="/about">About</$Link>
        </li>
        <li>
          <$Link to="/skill">Skill</$Link>
        </li>
        <li>
          <$Link to="/work">Work</$Link>
        </li>
      </_Ul>
    </_Nav>
  </_Root>
);

const _Root = styled.div`
  width: 100%;
  height: 100vh;
`;
const _Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;
const _Icon = styled.p`
  margin-bottom: 55px;
`;
const _Img = styled.img`
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;
const _Name = styled.p`
  font-size: 2em;
  @media screen and (min-width: 500px) {
    font-size: 3em;
  }
`;
const _P = styled.p`
  margin-bottom: 2em;
  @media screen and (min-width: 500px) {
    font-size: 1.5em;
  }
`;
const _Ul = styled.ul`
  width: 220px;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 500px) {
    width: 330px;
  }
`;
const _SNS = styled.img`
  @media screen and (min-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;
const _Nav = styled.nav`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 1em 2em;

  background-color: #e0e0e0;
  border-radius: 2em;
`;
const $Link = styled(Link)`
  text-decoration: none;
  color: ${Primary};
`;
