import React, { useState } from 'react';
import {Theme, Themes, setTheme} from '../../themes';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './index.scss';

import Navbar from './navbar';
import Notes from './routes/notes';

const App = () => {
  let theme = Themes.dark;

  if(localStorage.getItem('theme') == Themes.black.title)
    theme = Themes.black;
  else if(localStorage.getItem('theme') == Themes.light.title)
    theme = Themes.light;
  
  const [themeState, setThemeState] = useState(theme);
  setTheme(themeState);

  const toggleTheme = () => {
    const theme = themeState === Themes.dark ? Themes.black : themeState === Themes.light ? Themes.dark : Themes.light;
    setThemeState(theme);
    localStorage.setItem('theme', theme.title);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar theme={themeState} toggleTheme={toggleTheme} ></Navbar>
        
        <div className="app-content">
          <Switch>
            <Route exact path="/notes" render={() => <Notes />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
