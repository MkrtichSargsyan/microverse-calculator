/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import WelcomePage from './components/WelcomePage';
import QuotePage from './components/QuotePage';

ReactDOM.render(
  <BrowserRouter>
    <header className="nav">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </header>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={QuotePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
