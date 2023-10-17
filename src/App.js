import React from "react";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/Error/NotFound";
import Main from "./pages/Main/index";

const App = () => {
  return (
    <Routes>
      <Route path="/status/*" element={<Main />}></Route>
      <Route path="/settings/*" element={<Settings />}></Route>
      <Route path="/favorites/*" element={<Favorites />}></Route>
      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default App;
