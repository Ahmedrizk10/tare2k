import React from 'react';
import './index.css';
import CouresDetails from './components/CouresDetailsCard';
import Frontend from './data/frontend.json';
import Router from "./components/route/Router"

function App() {


  return (
    <div className=" dark:bg-slate-950 dark:text-white m-0 p-0 mt-[-20px]">
      <Router/>
    </div>
  );
}

export default App;