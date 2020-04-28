import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Icon from '../images/icon/Icon.png';
import Name from '../images/Name.png';
import GitHub from '../images/sns/GitHub.png';
import Instagram from '../images/sns/Instagram.png';
import Qiita from '../images/sns/Qiita.png';
import Twitter from '../images/sns/Twitter.png';

export default () => (
  <Root>
    <Flex>
      <IconImg>
        <img src={Icon} alt="The author is brushing his teeth" />
      </IconImg>
      <P>
        <img src={Name} alt="Author's name and occupation" />
      </P>
      <Ul>
        <li>
          <img src={GitHub} alt="GitHub logo" />
        </li>
        <li>
          <img src={Instagram} alt="Instagram logo" />
        </li>
        <li>
          <img src={Qiita} alt="Qiita logo" />
        </li>
        <li>
          <img src={Twitter} alt="Twitter logo" />
        </li>
      </Ul>
    </Flex>
    <Nav>
      <Ul>
        <li>
          <$Link to="/about">About</$Link>
        </li>
        <li>
          <$Link to="/skill">Skill</$Link>
        </li>
        <li>
          <$Link to="/work">Work</$Link>
        </li>
      </Ul>
    </Nav>
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100vh;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;
const IconImg = styled.p`
  margin-bottom: 55px;
`;
const P = styled.p`
  width: 263px;
  height: 74px;
  margin-bottom: 32px;
`;
const Ul = styled.ul`
  width: 220px;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.nav`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 1em 1.5em;

  background-color: #e0e0e0;
  border-radius: 2em;
`;
const $Link = styled(Link)`
  text-decoration: none;
  color: ${Primary};
`;
