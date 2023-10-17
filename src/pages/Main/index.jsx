import React from 'react';
import { Routes,Route } from 'react-router-dom';
import RequestList from '../RequestList/index';
import MainFrame from '../../components/Containers/MainFrame';
import NotFound from './../Error/NotFound';

const Main = (props) => {
  return (
    <MainFrame>
      <Routes>
        <Route path="/list" element={<RequestList />}></Route>
        <Route path="/chart" element={<RequestList />}></Route>
        <Route path="/service/:serviceName" element={<RequestList />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </MainFrame>
  )
};

export default Main;