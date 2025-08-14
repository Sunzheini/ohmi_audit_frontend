// context/AuthContext.js
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize from localStorage
    return Boolean(localStorage.getItem('authToken'));
  });

  const value = {
    isAuthenticated,
    login: (token) => {
      localStorage.setItem('authToken', token);
      setIsAuthenticated(true);
    },
    logout: () => {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}