import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes } from 'react-router-dom'
import Home from './home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRauter>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Produto" element={<Produto/>}/>
          <Route path="/Oferta" element={<Oferta/>}/>
      </Routes>
    </BrowserRauter>
  </React.StrictMode>
)



