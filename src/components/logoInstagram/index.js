import React from 'react';
import styled from 'styled-components';
import logoInstagram from '../../assets/img/logo_instagram.png';
import PropTypes from 'prop-types';

const LogoInstagram = ({ customHeight, customWidth }) => {
  return (
    <Image
      customHeight={customHeight}
      customWidth={customWidth}
      src={logoInstagram}
    ></Image>
  );
};

const Image = styled.img`
  width: ${props => props.customWidth};
  height: ${props => props.customHeight};
`;

LogoInstagram.propTypes = {
  customHeight: PropTypes.string.isRequired,
  customWidth: PropTypes.string.isRequired
};

export default LogoInstagram;
