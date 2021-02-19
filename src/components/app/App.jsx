import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CommentsPage from '../comments/CommentsPage';
import PostsPage from '../posts/PostsPage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PostsPage} />
          <Route exact path="/posts/:id" component={CommentsPage} />
        </Switch>
      </Router>
    </>
  );
}
