import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../../avatar';

const PostHeader = ({ user, post }) => {
  return (
    <PostHeaderContainer>
      <Avatar profileImage={user.profileImage} height='32' width='32' />
      <PostHeaderUsernameContainer>
        <PostHeaderUsername>{user.name}</PostHeaderUsername>
      </PostHeaderUsernameContainer>
      <i className='fas fa-ellipsis-h'></i>
    </PostHeaderContainer>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 16px;
`;

const PostHeaderUsernameContainer = styled.div`
  width: 100%;
`;

const PostHeaderUsername = styled.span`
  text-align: left;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: inherit;
  text-overflow: ellipsis;
`;

export default PostHeader;
