import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import LogoInstagram from '../logoInstagram';

const LoginTitle = () => {
  return (
    <LoginTitleContainer>
      <LogoInstagram customHeight='auto' customWidth='60%'></LogoInstagram>
      <Button>
        <i className='fab fa-facebook-square'></i>
        Connexion avec Facebook
      </Button>
    </LoginTitleContainer>
  );
};

LoginTitle.propTypes = {};

const LoginTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  & > * {
    margin: 1.5rem;
  }
`;

export default LoginTitle;
