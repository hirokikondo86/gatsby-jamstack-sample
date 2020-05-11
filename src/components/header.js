import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Primary } from '../const/color';
import Menu from '../images/Menu.png';
import Modal from './modal';

const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = (event) => {
    setIsModalOpen(true);
  };
  const handleModalClose = (event) => {
    setIsModalOpen(false);
  };

  return (
    <_Header>
      <_Ul>
        <_Li style={{ color: `${Primary}` }}>
          <$Link to="/">Home</$Link>
        </_Li>
        <_Li onClick={handleModalOpen}>
          <img style={{ cursor: 'pointer' }} src={Menu} alt="Menubar" />
        </_Li>
      </_Ul>
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose} />
    </_Header>
  );
};

const _Header = styled.header`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 100;

  background-color: #f2f2f2;
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
