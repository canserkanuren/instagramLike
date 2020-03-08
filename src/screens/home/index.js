import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomeHeader from '../../components/home/HomeHeader';
import HomeStories from '../../components/home/HomeStories';
import HomeFooter from '../../components/home/HomeFooter';
import HomePosts from '../../components/home/HomePosts';
import Spinner from '../../components/spinner';
import { getCurrentUser } from '../../services/UserService';

const Home = ({ history }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const connectedUser = getCurrentUser();
    setUser(connectedUser);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <HomeContainer>
      <HomeHeader></HomeHeader>
      <HomeMain>
        <HomeStories history={history}></HomeStories>
        <HomePosts history={history} user={user}></HomePosts>
      </HomeMain>
      <HomeFooter history={history} user={user}></HomeFooter>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100vh;
`;

const HomeMain = styled.div`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export default Home;
