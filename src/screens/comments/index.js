import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconItem from '../../components/iconItem';
import { useParams } from 'react-router';
import { getPostById } from '../../services/PostService';

const CommentsScreen = () => {
  const { idPost } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const postFromCache = getPostById(idPost);
    setPost(postFromCache);
  }, []);
  return (
    <CommentsScreenContainer>
      <CommentsPostHeader>
        <IconItem logo={'fas fa-chevron-left'}></IconItem>
        <CommentsPostTitle>Commentaires</CommentsPostTitle>
        <IconItem logo={'far fa-paper-plane'}></IconItem>
      </CommentsPostHeader>
      {/* <CommentsPostDescription>
        
      </CommentsPostDescription> */}
    </CommentsScreenContainer>
  );
};

const CommentsScreenContainer = styled.div``;

const CommentsPostHeader = styled.div`
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

const CommentsPostConfirm = styled.button`
  text-decoration: none;
  color: #3897f0;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
`;

const CommentsPostTitle = styled.h1`
  text-size-adjust: 100%;
  text-align: center;
  line-height: 18px;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  font-stretch: 100%;
`;

export default CommentsScreen;
