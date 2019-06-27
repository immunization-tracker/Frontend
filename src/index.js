import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
//import App from "./App2";
import {RootContextProvider} from './auth/RootContext';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';


ReactDOM.render(

<RootContextProvider>
  <App/>
</RootContextProvider>
    ,
  
  document.getElementById('root')
);