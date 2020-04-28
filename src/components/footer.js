import React from 'react';
import styled from 'styled-components';
import { Primary, Secondary } from '../const/color';

const Footer = () => (
  <_Footer>
    <p>
      <_Small>© 2020 - Copyright Hiroki Kondo, All Rights Reserved.</_Small>
    </p>
  </_Footer>
);

const _Footer = styled.footer`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Primary};
`;
const _Small = styled.small`
  color: ${Secondary};
`;

export default Footer;
