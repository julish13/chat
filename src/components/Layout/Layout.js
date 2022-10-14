import React from 'react';
import MainNavigation from './MainNavigation';

const Layout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <MainNavigation />
    {children}
  </div>
);

export default Layout;
