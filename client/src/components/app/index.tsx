import React, { useState, useEffect } from 'react';
import {Themes, setTheme} from '../../themes';
import {Switch, Route} from 'react-router-dom';
import './index.scss';

import Navbar from './navbar';
import Notes from './routes/notes';
import axios from 'axios';

export interface User {
  id: string;
  username: string;
  profilePicture: string;
  theme: number;
}

const startUpLog = () => {
  console.log(String.raw`%c
     _   _                     _   _       _       
    | \ | |                   | \ | |     | |      
    |  \| | _____   _____ _ __|  \| | ___ | |_ ___ 
    | . ' |/ _ \ \ / / _ \ '__| . ' |/ _ \| __/ _ \
    | |\  |  __/\ V /  __/ |  | |\  | (_) | ||  __/
    \_| \_/\___| \_/ \___|_|  \_| \_/\___/ \__\___|
  `, 'color: #0bbdc6;')
}

const App = () => {
  const [themeState, setThemeState] = useState(Themes.dark);
  
  const [userState, setUserState] = useState<User>({
    id: '',
    username: '',
    profilePicture: 'defaultProfilePicture',
    theme: 0
  });

  setTheme(themeState);

  useEffect(() => {
    loadUserData();
    startUpLog();
  }, []);

  useEffect(() => {
    setThemeState([Themes.dark, Themes.black, Themes.light][userState.theme])
  }, [userState])

  const loadUserData = () => {
    axios.get('/api/user/getCurrentUser').then((res) => {
      if(res.status === 200){
        setUserState({
          id: res.data.id,
          username: res.data.username,
          profilePicture: res.data.picture,
          theme: res.data.theme
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  const toggleTheme = () => {
    const theme = userState.theme > 1 ? 0 : userState.theme + 1;
    axios.post('/api/user/updateTheme', {
      theme: theme
    }).then((res) => {
      if(res.status === 200){
        setUserState({
          ...userState,
          theme: theme
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="app">
      <Navbar user={userState} theme={themeState} toggleTheme={toggleTheme} ></Navbar>
      
      <div className="app-content">
        <Switch>
          <Route exact path="/notes" render={() => <Notes />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
