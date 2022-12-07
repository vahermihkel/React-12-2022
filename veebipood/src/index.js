import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// installib projekti navigeerimise jaoks vajalikud koodijupid:
// 1. npm install react-router-dom
// koodijupid pannakse node_modules kausta (ehk ta läheb veel suuremaks)
// tekivad iga kord installides mingisugused vulnerabilities (seda ei pea tähele panema)

// 2. lisame BrowserRouter tagi App tag ümber
// see annab meie rakendusele navigeerimise võimekuse

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// cd -> change directory