import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/DashBoard/DashBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
};
export default App;
