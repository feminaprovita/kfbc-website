import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ArchiveList from './ArchiveList';
import FutureList from './FutureList';
import TagList from './TagList';
import About from './About';
import IdeaPage from './IdeaPage';
import Search from './Search';
import Random from './Random';
import Construction from './UnderConstruction'
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
            <Route exact path='/' component={Navbar} />
          </Switch>
          <Switch>
            <Route path='/' component={Footer} />
          </Switch>
          <main>
            <Switch>
              <Route exact path="/" component={About} />

              <Route exact path='/archive' component={ArchiveList} />
              <Route exact path='/archive/tags' component={TagList} />
              <Route exact path='/archive/search' component={Search} />
              <Route exact path='/archive/random' component={Random} />
              <Route exact path="/archive/construction" component={Construction} />

              <Route exact path='/future' component={FutureList} />
              <Route exact path='/future/tags' component={TagList} />
              <Route exact path={'/future/:ideaId'} component={IdeaPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Root;
