import React,{useState, useEffect} from 'react'
import './bootstrap.css';
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Decoder from 'jwt-decode'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Error404';
import DataTable from './Components/Data';
import UserLogin from './Components/UserLogin';
import WBP from './Components/Forms/WBP'
import WBPL from './Components/Lists/WBP'

import GZP from './Components/Forms/GZP'
import GZPL from './Components/Lists/GZP'

import TGM from './Components/Forms/TGM'
import TGML from './Components/Lists/TGM'

import AC from './Components/Forms/AC'
import ACL from './Components/Lists/AC'

function App() {

  const User = Cookies.get("-session-")

  const [ur, setUr] = useState(null)

 useEffect(() =>{
  if(User){
    var decode = Decoder(User, {header: true})
    console.log(decode);
    setUr(decode.typ)
  }

 })
  return (
    <BrowserRouter>
    <div className="App">     
     
    
      {(User) ? (
  <>
        <Navbar /> 
        <br />
        <Routes>
          
      
           
          <Route path='/' element={<Dashboard />} />
          <Route path='/DataTable' element={<DataTable />} />
      
          <Route path='/WBP' element={<WBP />} />
          <Route path='/WBPL' element={<WBPL />} />
          <Route path='/GZP' element={<GZP />} />
          <Route path='/GZPL' element={<GZPL />} />
          <Route path='/TGM' element={<TGM />} />
          <Route path='/TGML' element={<TGML />} />

          <Route path='/AC' element={<AC />} />

          <Route path='/ACL' element={<ACL />} />
          <Route path='*' element={<Error404 />} />
          
          </Routes>

          </>
      
          ) : (
            <Routes>
              <Route path='*' element={<UserLogin />} />
            </ Routes>
          ) }
           
    
    

    </div>
    </BrowserRouter>
  );
}

export default App;
