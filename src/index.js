import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CounterWithCustomHook />
);

