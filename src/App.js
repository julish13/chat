import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, LoadingSpinner, Modal } from '@components';

const Chat = lazy(() => import(/* webpackChunkName: "chat" */ '@screens/Chat.js'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@screens/Login.js'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '@screens/NotFound.js'));

const App = () => {
  const modalType = useSelector((state) => state.modal.type);
  return (
    <>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <Modal type={modalType} />
    </>
  );
};

export default App;
