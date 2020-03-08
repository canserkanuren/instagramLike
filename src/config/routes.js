import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../screens/home';
import Login from '../screens/login';
import StoryScreen from '../screens/story';
import PrivateRoute from './privateRoute';
import AddPostScreen from '../screens/addPost';
import CommentsScreen from '../screens/comments';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
        <PrivateRoute
          exact
          path='/stories/:idUser'
          component={StoryScreen}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/addPost'
          component={AddPostScreen}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/posts/:idPost/comments'
          component={CommentsScreen}
        ></PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
