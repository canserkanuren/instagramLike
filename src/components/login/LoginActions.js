import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../button';
const LoginActions = ({ isValidationDisabled, buttonAction }) => {
  return (
    <LoginActionsContainer>
      <LoginLink right>Mot de passe oublié ?</LoginLink>
      <Button disabled={!isValidationDisabled()} onClick={buttonAction}>
        Connexion
      </Button>
      <span>
        Vous n'avez pas de compte ? <LoginLink>Inscrivez-vous</LoginLink>
      </span>
    </LoginActionsContainer>
  );
};

LoginActions.propTypes = {
  isValidationDisabled: PropTypes.func.isRequired,
  buttonAction: PropTypes.func.isRequired
};

const LoginActionsContainer = styled.div`
  height: 110px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginLink = styled.a`
  text-decoration: none;
  color: #3897f0;
  width: 100%;
  text-align: right;
  &:visited {
    color: #3897f0;
  }
`;

export default LoginActions;
