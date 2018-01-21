import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import { App } from './app';

export function AppClient(props) {
  return (
    <StaticRouter>
      <App />
    </StaticRouter>
  );
}