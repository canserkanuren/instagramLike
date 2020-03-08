import React, { useEffect } from 'react';
import styled from 'styled-components';

import LoginForm from '../../components/login/LoginForm';
import LoginTitle from '../../components/login/LoginTitle';
import LoginSeparator from '../../components/login/LoginSeparator';
import LoginFooter from '../../components/login/LoginFooter';

const Login = ({ history }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/home');
    }
  }, []);
  return (
    <LoginMainStyle>
      <LoginTitle></LoginTitle>
      <LoginSeparator />
      <LoginForm history={history}></LoginForm>
      <LoginFooter>
        <span>from</span>
        <strong>FACEBOOK</strong>
      </LoginFooter>
    </LoginMainStyle>
  );
};

const LoginMainStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export default Login;
