import { motion } from 'framer-motion';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { updateLikeForPost } from '../../../services/PostService';
import { getCurrentUser } from '../../../services/UserService';
import Comment from '../../comment';
import IconItem from '../../iconItem';
import PostComment from './PostComment';

const PostActions = ({ post, history }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const [publishedDate, setPublishedDate] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLiked(post.likes.includes(currentUser.id));
    setComments(post.comments);
    setPublishedDate(moment().diff(moment(new Date(+post.publishedDate)), 'm'));
  }, []);

  const saveLike = isLiked => {
    setLiked(!liked);
    updateLikeForPost(post.id, user.id, isLiked);
  };

  const addComment = e => {
    e.preventDefault();
    history.push(`/posts/${post.id}/comments`);
  };

  return (
    <PostActionsContainer>
      <PostActionsMain>
        <PostActionsGrouped>
          <PostActionAnimated
            className={`fa-heart fa-lg ${liked ? 'fas icon-color' : 'far'}`}
            whileTap={{ scale: 0.8 }}
            onClick={() => saveLike(!liked)}
          />
          <PostActionAnimated
            className={'far fa-comment fa-lg'}
            whileTap={{ scale: 0.8 }}
            onClick={addComment}
          ></PostActionAnimated>
          <IconItem logo={'far fa-paper-plane'}></IconItem>
        </PostActionsGrouped>
        <IconItem logo={'fas fa-bookmark'}></IconItem>
      </PostActionsMain>
      {post.description ? (
        <PostDescription>
          <Comment author={user.name} comment={post.description}></Comment>
        </PostDescription>
      ) : (
        <></>
      )}
      <PostComments>
        {comments.map(comment => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </PostComments>
      <PostPublishDate>Il y a {publishedDate} minutes</PostPublishDate>
    </PostActionsContainer>
  );
};

PostActions.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object
};

const PostActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;

const PostActionsMain = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  flex-direction: row;
  align-items: center;
`;

const PostActionsGrouped = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > * {
    padding-right: 12px;
  }
`;

const PostActionAnimated = styled(motion.i)`
  &.icon-color {
    color: #b61c1c;
  }
`;

const PostComments = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PostPublishDate = styled.span`
  font-size: 10px;
  letter-spacing: 0.2px;
  line-height: 17px;
  color: #999;
  text-transform: uppercase;
  width: 100%;
  padding-top: 5px;
`;

const PostDescription = styled.div`
  padding: 5px 0;
  width: 100%;
`;

export default PostActions;
