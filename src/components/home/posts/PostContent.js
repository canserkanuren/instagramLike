import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContent = ({ post }) => {
  return (
    <PostContentContainer>
      <PostContentImage src={post.imageUrl}></PostContentImage>
    </PostContentContainer>
  );
};

PostContent.propTypes = {
  post: PropTypes.object.isRequired
};

const PostContentContainer = styled.div``;

const PostContentImage = styled.img`
  width: 100%;
  height: auto;
`;

export default PostContent;
