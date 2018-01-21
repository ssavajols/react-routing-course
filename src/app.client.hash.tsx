import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './app';

export function AppClientHash(props) {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}