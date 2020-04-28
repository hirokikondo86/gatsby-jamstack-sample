import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Menu from '../images/Menu.png';
import { Link } from 'gatsby';

const Header = () => (
  <$Header>
    <$Ul>
      <$Li style={{ color: `${Primary}` }}>
        <$Link to="/">Home</$Link>
      </$Li>
      <$Li>
        <img src={Menu} alt="Menubar" />
      </$Li>
    </$Ul>
  </$Header>
);

const $Header = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;

  box-shadow: 1px 0 1em;
`;
const $Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const $Li = styled.li`
  margin: 0 1em;
`;
const $Link = styled(Link)`
  text-decoration: none;
  color: ${Primary};
`;

export default Header;
