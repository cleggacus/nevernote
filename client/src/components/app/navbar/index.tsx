import React, { useState } from 'react';
import {Theme} from '../../../themes';
import { Link } from "react-router-dom";
import './index.scss';
import defaultPicture from '../../../assets/deault-profile-picture.png';
import {ChevronDown, List, Grid, Bell} from 'react-feather';

interface IProps{
  theme: Theme;
  toggleTheme: Function;
}

const Navbar = (props: IProps) => {
  return (
    <ul className="app-navbar">
      <div className="navbar-top">
        <div className="navbar-top-picture">
          <img src={defaultPicture} />
        </div>

        <a className="navbar-top-username">Username</a>

        <Link className="navbar-top-icon" to="/" style={{ textDecoration: 'none' }}>
          <ChevronDown/>
        </Link>

        <Link className="navbar-top-icon" to="/notification" style={{ textDecoration: 'none' }}>
          <Bell/>
        </Link>
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <li className="navbar-item">
          <Grid/>
          <a>Dashboard</a>
        </li>
      </Link>

      <Link to="/notes" style={{ textDecoration: 'none' }}>
        <li className="navbar-item">
          <List/>
          <a>All Notes</a>
        </li>
      </Link>
    </ul>
  );
}

export default Navbar;
