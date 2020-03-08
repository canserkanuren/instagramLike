import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
  return <LoginButton {...props}>{children}</LoginButton>;
};

const LoginButton = styled.button`
  border: 1px solid transparent;
  background-color: #3897f0;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  padding: 5px 9px;
  color: white;
  font-size: 14px;
  & > * {
    padding: 0 5px;
  }
  &[disabled] {
    background-color: rgba(56, 151, 240, 0.3);
  }
`;

export default Button;
