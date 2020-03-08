import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Avatar from '../../avatar';

const StoryAvatar = ({ user, history }) => {
  const showStory = () => {
    history.push(`/stories/${user.id}`);
  };

  return (
    <StoryAvatarContainer onClick={showStory}>
      <Avatar profileImage={user.profileImage} height='58' width='58' />
      <StoryAvatarUsername>{user.name}</StoryAvatarUsername>
    </StoryAvatarContainer>
  );
};

StoryAvatar.propTypes = {
  user: PropTypes.object
};

const StoryAvatarContainer = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:first-child {
    padding-left: 10px;
  }
  cursor: pointer;
`;

const StoryAvatarUsername = styled.span`
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 5px;
`;

export default StoryAvatar;
