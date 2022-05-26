import { createContext, useState, useMemo, useCallback } from 'react';

const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken || null);

  const isAuthenticated = !!token;

  const loginHandler = useCallback((token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      isAuthenticated,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [token, isAuthenticated, loginHandler, logoutHandler]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
export default AuthContext;
