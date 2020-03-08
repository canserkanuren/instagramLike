import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Stories from 'react-insta-stories';
import { useParams } from 'react-router';
import Spinner from '../../components/spinner';
import getStoriesByUserId from '../../services/StoryService';
import { getUserById } from '../../services/UserService';

const StoryScreen = ({ history }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const height = '100vh';
  const width = '100vw';
  const { idUser } = useParams();

  const setupStories = () => {
    const { name, profileImage } = getUserById(idUser);
    const header = {
      heading: name,
      subheading: 'Posted 5h ago',
      profileImage: profileImage
    };

    const storiesFromUser = getStoriesByUserId(idUser);
    storiesFromUser.forEach(s => (s.header = { ...header }));
    setStories(storiesFromUser);
    setLoading(false);
  };

  useEffect(() => {
    setupStories();
  }, []);

  const redirectToHome = () => {
    history.push('/home');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Stories
      stories={stories}
      defaultInterval={1500}
      width={width}
      height={height}
      onAllStoriesEnd={redirectToHome}
    />
  );
};

StoryScreen.propTypes = {
  history: PropTypes.object
};

export default StoryScreen;
