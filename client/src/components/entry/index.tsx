import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

const Entry = () => {
  return(
    <div className="entry">
      <Link to="/login" className="option-login">
        <h1>Login</h1>
      </Link>

      <Link to="/register" className="option-register">
        <h1>Register</h1>
      </Link>
    </div>
  );
}

export default Entry;