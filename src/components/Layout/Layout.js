import MainNavigation from './MainNavigation';

const Layout = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <MainNavigation />
    <main>
      <div className="container-fluid h-100">{children}</div>
    </main>
  </div>
);

export default Layout;
