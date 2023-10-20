import React from 'react';
import { Routes,Route } from 'react-router-dom';
import MainFrame from '../components/MainFrame';
import NotFound from '../pages/Error/NotFound';
import Service from '../pages/Settings/Service';
import Notification from '../pages/Settings/Notification';

const SettingsRouter = () => {
  return (
    <MainFrame>
      <Routes>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </MainFrame>
  )
};

export default SettingsRouter;