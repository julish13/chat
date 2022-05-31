import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@components';
import { Chat, Login } from '@screens';
import PrivateRoute from '@utils/PrivateRoute.js';
import { WebSocketContextProvider } from '@store/context/web-socket-context';

const App = () => (
  <Layout>
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
  </Layout>
);

export default App;
