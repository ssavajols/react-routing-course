import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';

export function AppClient(props) {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}