import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/homePage/Home';
import JoinnowPage from '../pages/joinnowpage/joinnowPage';
import SigninPage from '../pages/signinpage/signinPage';
import ChatPage from '../pages/messagePage/ChatPage';

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/joinnow" element={<JoinnowPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage
