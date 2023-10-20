import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Component1/Onboarding/Signup/Signup';
import Login from './Component1/Onboarding/Login/Login';
import ForgetPassword from './Component1/Onboarding/ForgetPassword/ForgetPassword';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/" element={<ForgetPassword/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
