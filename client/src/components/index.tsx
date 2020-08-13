import React from 'react';
import './index.scss';
import auth from './auth';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

import {Themes, setTheme} from '../themes';
import App from './app';
import Entry from './entry';
import Login from './entry/prompts/login';
import Register from './entry/prompts/register';

const Components = () => {
  setTheme(Themes.dark);

  return (
    <div className="components">
      <BrowserRouter>
        <Switch>
          <Route exact path="/entry" render={() => <Entry/>} />
          <Route exact path="/login" render={() => <Login/>} />
          <Route exact path="/register" render={() => <Register/>} />
          <Route component={auth(App)} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Components;