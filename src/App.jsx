import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <SideBar/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
