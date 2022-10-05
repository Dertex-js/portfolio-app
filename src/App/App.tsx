import React from "react";

import Header from "@components/Header";
import { routes } from "@config/routes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.skills} element={<Skills />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
