import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comment = ({ author, comment }) => {
  if (!author && !comment) {
    return <></>;
  }
  return (
    <CommentContainer>
      <PostCommentAuthor>{author}</PostCommentAuthor>
      <PostCommentContent>{comment}</PostCommentContent>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string,
  comment: PropTypes.string
};

const CommentContainer = styled.div``;

const PostCommentAuthor = styled.strong`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  margin-left: -5px;
`;

const PostCommentContent = styled.span`
  padding-left: 5px;
`;

export default Comment;
