import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './components/products';
import Home from './components/home';
import NavBar from './components/common/navbar';
import MovieForm from './components/movieForm';
import PageNotFound from './components/pageNotFound';
import LoginForm from './components/loginForm';
import Register from './components/register';

class App extends Component {

  render() {

    return (
      <div>

        <NavBar />
        <div className="content">

          <Switch>
            {/* List routes from most specific to most general */}
            <Route path='/login' component={ LoginForm } />  
            <Route path='/register' component={ Register } /> 
            <Route path='/products' render = { (props) => <Products sortBy="newest" { ...props }/>} /> 
            <Route path='/movies/new' component={ MovieForm } />                       
            <Route path='/movies/:id' component={ MovieForm } />                       
            <Route path='/movies' component={ Movies } />
            <Route path='/not-found' component={PageNotFound}/>
            <Route path='/' exact component={ Home } />

            <Redirect from='/home' to='/'/>
            <Redirect to='/not-found'/>
          </Switch>

        </div>

      </div>
    );
  }
}

export default App;