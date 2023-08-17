import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Countries />} />
        <Route path="/about/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
