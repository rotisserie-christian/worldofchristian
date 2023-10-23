import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tavernstack from "./components/Tavernstack";
import Neuronotes from "./components/Neuronotes";
import Cheetahmode from "./components/Cheetahmode";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tavernstack' element={<Tavernstack />} />
          <Route path='/neuronotes' element={<Neuronotes />} />
          <Route path='/cheetahmode' element={<Cheetahmode />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;