import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Vacancy from "./page/Vacancy";
import About from "./page/About";
import Notfound from "./page/Notfound";
import Detail from "./page/Detail";

const App = () => {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vacancy" element={<Vacancy/>} />
      <Route path="/About" element={<About />}/>
      <Route path="*" element={<Notfound />}/>
      <Route path="/Detail-post/:id" element={<Detail />}/>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
