import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
   <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);


