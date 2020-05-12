import React from 'react';
import { Link } from 'gatsby';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Primary } from '../const/color';

ReactModal.setAppElement('#___gatsby');

const Modal = (props) => {
  const { isModalOpen, handleModalClose } = props;

  return (
    <$ReactModal isOpen={isModalOpen} onRequestClose={handleModalClose} contentLabel="Modal Menu">
      <p style={{ overflow: 'hidden' }}>
        <_A onClick={handleModalClose}>Close</_A>
      </p>
      <_Ul>
        <_Li>
          <$Link to="/">Home</$Link>
        </_Li>
        <_Li>
          <$Link to="/about">About</$Link>
        </_Li>
        <_Li>
          <$Link to="/skill">Skill</$Link>
        </_Li>
        <_Li>
          <$Link to="/work">Work</$Link>
        </_Li>
      </_Ul>
    </$ReactModal>
  );
};

const $ReactModal = styled(ReactModal)`
  width: 350px;
  height: 350px;
  margin-right: -50%;
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);

  z-index: 999;
  background-color: #fff;
`;
const _A = styled.a`
  margin: 1em;
  float: right;
  overflow: hidden;
  cursor: pointer;

  text-decoration: none;
  color: ${Primary};
`;
const _Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const _Li = styled.li`
  margin-bottom: 1em;

  font-weight: bold;
  font-size: 1.5em;
  color: ${Primary};
`;
const $Link = styled(Link)`
  text-decoration: none;
  color: ${Primary};
`;

export default Modal;
