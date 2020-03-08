import React from 'react';
import styled from 'styled-components';
import HeaderIcon from './HeaderIcon';
import logoInstaPetit from '../../assets/img/logo_insta_petit.png';

const HomeHeader = () => {
  return (
    <HomeHeaderMain>
      <HomeHeaderContainer>
        <HeaderIcon iconClass='fas fa-camera'></HeaderIcon>
        <Image src={logoInstaPetit}></Image>
        <HeaderIcon iconClass='far fa-paper-plane'></HeaderIcon>
      </HomeHeaderContainer>
    </HomeHeaderMain>
  );
};

const HomeHeaderMain = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  position: fixed;
  background-color: white;
`;

const HomeHeaderContainer = styled.header`
  padding: 0 16px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &::before {
    background-color: rgba(var(--b6a, 219, 219, 219), 1);
    bottom: -1px;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const Image = styled.img`
  height: 29px;
  width: 103px;
`;

export default HomeHeader;
