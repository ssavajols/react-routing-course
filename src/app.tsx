import * as React from 'react';
import { AppRouter } from './router';
import { Component1, Component2 } from './modules/contact/contact.module';


export function App() {
  return <div>
      <h1>React router app</h1>
      <AppRouter />
      <Component1 />
      <Component2 />
  </div>;
}