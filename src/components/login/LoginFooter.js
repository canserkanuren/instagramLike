import React from 'react';
import styled from 'styled-components';

const LoginFooter = () => {
  return (
    <LoginFooterContainer>
      <span>from</span>
      <strong>FACEBOOK</strong>
    </LoginFooterContainer>
  );
};

const LoginFooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 60px;
  width 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  align-items: center;
  border-top: 1px solid lightgray;
  strong {
    letter-spacing: 2px;

  }
  & > * {
    font-size: 12px;
  }
`;

export default LoginFooter;
