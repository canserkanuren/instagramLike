import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import IconItem from '../iconItem';

const HomeFooter = ({ user, history }) => {
  const openFileSelector = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = ev => {
      localStorage.setItem('imageToSet', ev.target.result);
      history.push('/addPost');
    };

    reader.readAsDataURL(file);
  };

  return (
    <HomeFooterContainer>
      <IconItem logo={'fas fa-lg fa-home'} />
      <IconItem logo={'fas fa-lg fa-search'} />
      <FileInputContainer>
        <IconItem logo={'far fa-lg fa-plus-square'}></IconItem>
        <FileInput
          type='file'
          id='file'
          onChange={openFileSelector}
        ></FileInput>
      </FileInputContainer>
      <IconItem logo={'far fa-lg fa-heart'} />
      <Avatar profileImage={user.profileImage} height='24' width='24' />
    </HomeFooterContainer>
  );
};

HomeFooter.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object
};

const HomeFooterContainer = styled.div`
  position: fixed;
  height: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  z-index: 1;
  background-color: white;
`;

const FileInputContainer = styled.div``;

const FileInput = styled.input`
  top: 0;
  bottom: 0;
  left: 40%;
  right: 40%;
  width: 20%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  position: absolute;
  cursor: pointer;
`;

export default HomeFooter;
