import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PokemonDetail from "./Pages/PokemonDetail";
import Home from "./Pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
