import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
