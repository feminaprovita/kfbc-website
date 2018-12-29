import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
// import Footer from './Footer';
import Sidebar from './Sidebar';
import ArchiveList from './ArchiveList';
import FutureList from './FutureList';
import TagList from './TagList';
import About from './About';
// import other components from this folder
// import thunks by name from '../reducers'

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/future' component={Sidebar} />
            <Route path='/archive' component={Navbar} />
            <Route path='/about' component={Navbar} />
            <Route exact path='/' component={Navbar} />
          </Switch>
          <main>
            <Switch>
              <Route exact path="/" render={() => (
                  <div>
                    <h1>Keep-Facebook-Cheerful Conversation Starters Archive</h1>
                    <p>A silly idea that snowballed until now I think I'm not allowed to stop! Enjoy browsing the archive. :)</p>
                  </div> )} />
              <Route exact path='/archive' render={ArchiveList} />
              <Route exact path='/future' component={FutureList} />
              <Route exact path='/archive/tags' component={TagList} />
              <Route exact path='/future/tags' component={TagList} />
              <Route exact path='/about' component={About} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Root;
