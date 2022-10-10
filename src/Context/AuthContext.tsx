import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLogin: false,
  signIn: () => {},
  logOut: () => {},
});

interface IChildren {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const signIn = () => setIsLogin(true);
  const logOut = () => setIsLogin(false);

  const value = { isLogin, signIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
