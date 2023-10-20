import React from 'react';
import { Routes,Route } from 'react-router-dom';
import RequestList from '../pages/StatusView/RequestList/index';
import MainFrame from '../components/MainFrame';
import NotFound from '../pages/Error/NotFound';
import Services from '../pages/StatusView/Services';

const StatusViewRouter = () => {
  return (
    <MainFrame>
      <Routes>
        <Route path="/requestList" element={<RequestList />}></Route>
        <Route path="/chart" element={<></>}></Route>
        <Route path="/service/:serviceCode" element={<Services />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </MainFrame>
  )
};

export default StatusViewRouter;