import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoryAvatar from './stories/StoryAvatar';
import Spinner from '../spinner';
import { getUsersCached } from '../../services/UserService';

const HomeStories = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = () => {
    const storyUsers = getUsersCached();
    setUsers(storyUsers);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <HomeStoriesContainer>
      {users.map(u => (
        <StoryAvatar key={u.id} user={u} history={history} />
      ))}
    </HomeStoriesContainer>
  );
};

const HomeStoriesContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fafafa;
  border-width: 1px 0px;
  border-style: solid;
  border-color: lightgray;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  align-items: center;
`;

HomeStories.propTypes = {};

export default HomeStories;
