import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Post from './components/Post';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:postId" component={Post} />
        </Switch>
      </>
    );
  }
}

export default App;
