import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Login from '@screens/Login.js';
import PrivateRoute from '@utils/PrivateRoute.js';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<PrivateRoute>sdfsdfsf</PrivateRoute>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Layout>
);

export default App;
