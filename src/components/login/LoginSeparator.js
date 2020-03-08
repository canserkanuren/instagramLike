import React from 'react';
import styled from 'styled-components';

const LoginSeparator = () => {
  return (
    <LoginSeparatorContainer>
      <LoginSeparatorSegment></LoginSeparatorSegment>
      <span>OU</span>
      <LoginSeparatorSegment></LoginSeparatorSegment>
    </LoginSeparatorContainer>
  );
};

const LoginSeparatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LoginSeparatorSegment = styled.div`
  width: 150px;
  height: 1px;
  background-color: grey;
`;

export default LoginSeparator;
