import React, { createContext, useState, useMemo, useCallback } from 'react';

const AuthContext = createContext({
  token: '',
  username: '',
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const storedToken = localStorage.getItem('token');
  const storedUsername = localStorage.getItem('username');
  const [token, setToken] = useState(storedToken || null);
  const [username, setUsername] = useState(storedUsername || null);

  const isAuthenticated = !!token;

  const loginHandler = useCallback((data) => {
    const { token, username } = data;
    setToken(token);
    setUsername(username);
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      username,
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
