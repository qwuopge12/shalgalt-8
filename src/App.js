import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./container/home";
import Red from './components/red'
import Blue from "./components/blue";
import Green from "./components/green";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/red' element={<Red/>} />
        <Route path='/blue' element={<Blue/>} />
        <Route path="/green" element={<Green/>} />
        <Route path="/" element={<Home/>} />
      </Routes>   
   </BrowserRouter>
     
    </>    
  );
}

export default App;
