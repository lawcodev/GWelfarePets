
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NAME_APPLICATION } from './config/config'

document.getElementById('title').innerText = NAME_APPLICATION

ReactDOM.render(
    <App />,
  document.getElementById('root')
);