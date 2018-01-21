import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from './modules/home/home.module';
import { Contact } from './modules/contact/contact.module';

export function AppRouter(props) {
  return (
    <div>
      <ul>
        <li><NavLink to='/contact' activeStyle={{fontWeight: 'bold'}}>Contact</NavLink></li>
        <li><NavLink to='/' exact activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
      </ul>

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact component={Home} />
      </Switch>
    </div>
  );
}