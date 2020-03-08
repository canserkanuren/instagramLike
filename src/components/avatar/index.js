import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = ({ profileImage, height, width }) => {
  return <StoryAvatarImage src={profileImage} width={width} height={height} />;
};

Avatar.propTypes = {
  profileImage: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

const StoryAvatarImage = styled.img`
  height: ${props => `${props.height}px`}};
  width: ${props => `${props.width}px`}};
  border-radius: ${props => `${props.width / 2}px`};
`;

export default Avatar;
