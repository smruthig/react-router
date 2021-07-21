import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'
import Post from './components/Post'

const App = () => {

  const [login, setLogin] =  useState(false)

  return (
    <Router>
      {/*
        Router features:
          basename='someUrl'
            adds a url path after localhost
          forceRefresh
            force refreshes on clicking a link
          getUserConfirmation
            to confirm when user clicks a link, for syntax refer google
      */}

      <div className="App">
        <Header/>

        <button onClick={() => setLogin(!login)} >{login ? "Log Out" : "Log In"}</button>

        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/profile'>
            {/* {login ? <Profile/> : <Redirect to='/' />} */}
            <Profile login={login} />
          </Route>
          <Route path='/post/:id' component={Post} />
          {/* http://localhost:3000/post/my_id */}
          {/* http://localhost:3000/post/MY201BG085?first=Jane&last=Doe */}
          <Route component={ErrorPage}/>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
