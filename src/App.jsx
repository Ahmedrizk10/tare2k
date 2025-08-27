import React from 'react';
import './index.css';
import CouresDetails from './components/CouresDetailsCard';
import Frontend from './data/frontend.json';
import Router from "./components/route/Router"


function App() {


  return (
    <div className="min-h-screen dark:bg-slate-950 dark:text-white">
      <Router/>
    </div>
  );
}

export default App;