import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
