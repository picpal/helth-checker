import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NotFound from '../pages/Error/NotFound';
import SettingsRouter from './SettingsRouter';
import StatusViewRouter from './StatusViewRouter';
import Main from '../pages';


const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/status/*" element={<StatusViewRouter />}></Route>
      <Route path="/setting/*" element={<SettingsRouter />}></Route>
      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
};

export default PageRouter;