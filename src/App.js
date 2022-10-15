import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, LoadingSpinner } from '@components';

const Chat = lazy(() => import(/* webpackChunkName: "chat" */ '@screens/Chat.js'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@screens/Login.js'));

const App = () => (
  <Layout>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
