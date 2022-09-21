import React, { Children, createContext, useState } from "react";

interface IContext {
  isRegistr: boolean;
  openRegistr: () => void;
  isForgot: boolean;
  openForgot: () => void;
}

export const Context = createContext<IContext>({
  isRegistr: false,
  openRegistr: () => {},
  isForgot: false,
  openForgot: () => {},
});

export const State = ({ children }: { children: React.ReactNode }) => {
  const [isRegistr, setIsRegistr] = useState(false);
  const [isForgot, setIsForgot] = useState(false);

  const openRegistr = () => setIsRegistr(true);
  const openForgot = () => setIsForgot(true);

  return (
    <Context.Provider value={{ isRegistr, openRegistr, isForgot, openForgot }}>
      {children}
    </Context.Provider>
  );
};
