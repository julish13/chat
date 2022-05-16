import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Login from '@screens/Login.js';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate replace to='/login' />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Layout>
);

export default App;
