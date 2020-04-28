import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Menu from '../images/Menu.png';
import { Link } from 'gatsby';

const Header = () => (
  <_Header>
    <_Ul>
      <_Li style={{ color: `_{Primary}` }}>
        <$Link to="/">Home</$Link>
      </_Li>
      <_Li>
        <img src={Menu} alt="Menubar" />
      </_Li>
    </_Ul>
  </_Header>
);

const _Header = styled.header`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 100;

  box-shadow: 1px 0 1em;
`;
const _Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const _Li = styled.li`
  margin: 0 1em;
`;
const $Link = styled(Link)`
  text-decoration: none;
  color: ${Primary};
`;

export default Header;
