import React, { useEffect } from 'react';
import './App.css';
import Routes from './config/routes';
import { ThemeProvider } from 'styled-components';
import theme from './config/themes';
import users from './data/users.json';
import posts from './data/posts.json';
import stories from './data/stories.json';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    }
    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
    if (!localStorage.getItem('stories')) {
      localStorage.setItem('stories', JSON.stringify(stories));
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
