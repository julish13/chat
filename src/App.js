import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, LoadingSpinner } from '@components';
import PrivateRoute from '@utils/PrivateRoute.js';
import { WebSocketContextProvider } from '@store/context/web-socket-context';

const Chat = lazy(() => import(/* webpackChunkName: "chat" */ '@screens/Chat.js'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@screens/Login.js'));

const App = () => (
  <Layout>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <WebSocketContextProvider>
                <Chat />
              </WebSocketContextProvider>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
