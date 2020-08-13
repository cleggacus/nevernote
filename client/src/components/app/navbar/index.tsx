import React, { useState } from 'react';
import {Theme, Themes} from '../../../themes';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import './index.scss';
import {ChevronDown, List, Grid, Moon, Circle, Sun, LogOut} from 'react-feather';
import {User} from '../index';

interface IProps{
  theme: Theme;
  toggleTheme: Function;
  user: User;
}

const Navbar = (props: IProps) => {
  const [redirectState, setRedirectState] = useState('');

  const logout = () => {
    axios.get('/api/user/logout')
      .then((res) => {
        setRedirectState('/');
      }).catch((err) => {
        setRedirectState('/');
      });
  }

  return (
    <ul className="app-navbar">
      {redirectState ? <Redirect to={redirectState} /> : null}
      
      <div className="navbar-top">
        <div className="navbar-top-picture">
          <img alt="" src={`uploads/${props.user.profilePicture}`} />
        </div>

        <Link className="navbar-top-username" to="/">{props.user.username}</Link>

        <Link className="navbar-top-icon" to="/">
          <ChevronDown/>
        </Link>

        <div className="navbar-top-icon" onClick={() => props.toggleTheme()}>
          {props.theme ===  Themes.dark ? <Moon/> : props.theme === Themes.black ? <Circle/> : <Sun/>}
        </div>
      </div>

      <Link to="/">
        <li className="navbar-item">
          <Grid/>
          Dashboard
        </li>
      </Link>

      <Link to="/notes">
        <li className="navbar-item">
          <List/>
          All Notes
        </li>
      </Link>

      <a href="/#" className="navbar-bottom">
        <li onClick={logout} className="navbar-item">
          <LogOut/>
          Logout
        </li>
      </a>
    </ul>
  );
}

export default Navbar;
