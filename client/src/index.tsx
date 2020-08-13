import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Components from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Components />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();