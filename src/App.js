import './App.css';
import { Login } from './components/Login';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import { useState } from 'react';

function App() {

  const [isAuthenticated,setIsAuthenticated] =useState(false);

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean)
  }

  return (
    <div className="App">
      <h1>Hi from app component</h1>
      <BrowserRouter>
      <div className="contariner">
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/dashboard"/>}></Route>
          <Route path="/register" element={!isAuthenticated ? <Register setAuth={setAuth}/> : <Navigate to="/login"/>}></Route>
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth}/> : <Navigate to="/login"/>}></Route>
          <Route path="*" element={<Error/>}></Route>  
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
