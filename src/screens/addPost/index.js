import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Avatar from '../../components/avatar';
import IconItem from '../../components/iconItem';
import Spinner from '../../components/spinner';
import { savePost } from '../../services/PostService';
import { getCurrentUser } from '../../services/UserService';

const AddPostScreen = ({ history }) => {
  const [user, setUser] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [legende, setLegende] = useState('');

  useEffect(() => {
    const imageFromLocalStorage = localStorage.getItem('imageToSet');
    setImage(imageFromLocalStorage);
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const createPost = event => {
    event.preventDefault();
    const post = {
      id: uuidv4(),
      publishedBy: user.id,
      comments: [],
      likes: [],
      publishedDate: new Date().getTime(),
      description: legende,
      imageUrl: image
    };

    savePost(post);
    history.push('/home');
  };

  const goBack = () => {
    localStorage.removeItem('imageToSet');
    history.goBack();
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <AddPostContainer>
      <AddPostHeader>
        <IconItem logo={'fas fa-chevron-left'} onClick={goBack}></IconItem>
        <AddPostTitle>Nouvelle publication</AddPostTitle>
        <AddPostConfirm onClick={e => createPost(e)}>Partager</AddPostConfirm>
      </AddPostHeader>
      <AddPostContent>
        <Avatar
          profileImage={user.profileImage}
          width='30'
          height='30'
        ></Avatar>
        <AddPostTextArea
          onChange={e => setLegende(e.target.value)}
          placeholder='Écrire une légende'
        ></AddPostTextArea>
        <AddPostImage src={image}></AddPostImage>
      </AddPostContent>
    </AddPostContainer>
  );
};

const AddPostContainer = styled.div``;

const AddPostHeader = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 16px;
`;

const AddPostConfirm = styled.button`
  text-decoration: none;
  color: #3897f0;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
`;

const AddPostTitle = styled.h1`
  text-size-adjust: 100%;
  text-align: center;
  line-height: 18px;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  font-stretch: 100%;
`;

const AddPostContent = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgray;
  padding: 16px;
  & > *:not(:last-child) {
    margin-right: 6px;
  }
`;

const AddPostTextArea = styled.textarea`
  background: 0 0;
  border: 0;
  color: #262626;
  font-size: 14px;
  outline: 0;
  line-height: 18px;
  height: 45px;
  overflow: auto;
  overflow-wrap: break-word;
  resize: none;
  width: 298px;
`;

const AddPostImage = styled.img`
  height: 48px;
  width: 48px;
`;

export default AddPostScreen;
