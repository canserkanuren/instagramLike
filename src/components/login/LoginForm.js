import React, { useState } from 'react';
import Input from '../input';
import styled from 'styled-components';
import LoginActions from './LoginActions';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { getUserByEmailAndPassword } from '../../services/UserService';

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const onUsernameChange = event => {
    setUsername(event.target.value);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };

  const isValidationDisabled = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const token = uuidv4();

    const user = getUserByEmailAndPassword(username, password);
    if (user) {
      localStorage.setItem('token', token);
      localStorage.setItem('connectedUser', JSON.stringify(user));
      history.push('/home');
    } else {
      setLoginError(true);
    }
  };

  return (
    <LoginFormContainer>
      <Input
        value={username}
        placeholder='Numéro de téléphone, nom d’utilisateur ou adresse e-mail'
        type='text'
        onChange={onUsernameChange}
        required
      ></Input>
      <Input
        value={password}
        onChange={onPasswordChange}
        placeholder='Mot de passe'
        type='password'
        required
      ></Input>
      {loginError ? (
        <LoginError>
          Votre email ou votre mot de passe ne correspond pas.
        </LoginError>
      ) : (
        <></>
      )}
      <LoginActions
        isValidationDisabled={isValidationDisabled}
        buttonAction={handleSubmit}
      ></LoginActions>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const LoginError = styled.span`
  color: red;
  text-align: center;
`;

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
};

export default LoginForm;
