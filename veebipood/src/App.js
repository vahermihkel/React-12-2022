// import logo from './logo.svg';
// WARNING in [eslint]
// src\App.js
//   Line 1:8:  'logo' is defined but never used  no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

// meil on kahte liiki vead

// 1. kompileerimise vead   compile errors
// neid on näha seal, kus käib "npm start"
// leht on musta taustaga, veatekst on ees

// 2. brauseris töötamise vead    runtime errors
// neid on näha minnes brauseris inspect -> console
// leht on üleni valge

function App() {
  return (
    <div className="App">

      <Link to="/avaleht">
        {/* <img className="pilt" src="/minu_pilt.png" alt="" /> */}
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>

    </div>
  );
}

export default App;

// () <--- shift + 8
// [] <--- alt + 8
// {} <-- alt + 7

// shift + 9 --> ()
// || shift *
// shift + ü --> []
// ü  --> {}
