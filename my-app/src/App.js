import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Assignment01 from './Assignment01';
import Assignment02 from './Assignment02';
import Home from './Home.js'

function App() {

  
  return (
    <>
    <div className='main-container'>
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Assignment01' element={<Assignment01 />}/>
      <Route path='/Assignment02' element={<Assignment02 />}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>

    
  );
}

export default App;
