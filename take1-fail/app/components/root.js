import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
// import other components from this folder
// import thunks from '../reducers'

function Root() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path='/' render={() => <h1>KFBC WELCOME HERE</h1>} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    archive: state.archiveReducer.posts,
    future: state.futureReducer.ideas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatch all thunks with arguments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
