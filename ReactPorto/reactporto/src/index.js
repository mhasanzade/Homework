import React from 'react';
import Card from './Cards';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Need from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Need/> */}
    <App/>
    {/* <BrowserRouter> */}
          {/* <Route exact path="/" component={App}/> */}
          {/* <Route path="/Cards" component={Card}/> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
