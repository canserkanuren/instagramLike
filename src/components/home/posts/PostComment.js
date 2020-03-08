import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getUserById } from '../../../services/UserService';
import Spinner from '../../spinner';
import Comment from '../../comment';

const PostComment = ({ comment }) => {
  const [loading, setLoading] = useState(true);
  const [fullComment, setFullComment] = useState(null);

  useEffect(() => {
    const user = getUserById(comment.from.id);
    comment.from.username = user.name;
    setFullComment(comment);
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <PostCommentContainer>
      <Comment
        author={fullComment.from.username}
        comment={fullComment.message}
      ></Comment>
    </PostCommentContainer>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object.isRequired
};

const PostCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default PostComment;
