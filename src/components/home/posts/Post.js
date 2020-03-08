import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PropTypes from 'prop-types';
import { getUserById } from '../../../services/UserService';
import Spinner from '../../spinner';
import PostActions from './PostActions';

const Post = ({ post, history }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserFromPost();
  }, []);

  const getUserFromPost = () => {
    const user = getUserById(post.publishedBy);
    setLoading(false);
    setUser(user);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <PostContainer>
      <PostHeader post={post} user={user}></PostHeader>
      <PostContent post={post}></PostContent>
      <PostActions post={post} history={history}></PostActions>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
