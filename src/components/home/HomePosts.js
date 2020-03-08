import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from './posts/Post';
import { getPostsFromUsersSorted } from '../../services/PostService';

const HomePosts = ({ user, history }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsOrdered();
    setLoading(false);
  }, []);

  const getPostsOrdered = () => {
    const postsToBeDisplayed = getPostsFromUsersSorted();
    setPosts(postsToBeDisplayed);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <HomePostsContainer>
      {posts.map(p => (
        <Post key={p.id} post={p} history={history}></Post>
      ))}
    </HomePostsContainer>
  );
};

const HomePostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

HomePosts.propTypes = {
  user: PropTypes.object.isRequired
};

export default HomePosts;
