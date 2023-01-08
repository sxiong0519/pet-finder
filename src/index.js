import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationViews } from './ApplicationViews';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApplicationViews/>
  </BrowserRouter>
);


