import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default App;
