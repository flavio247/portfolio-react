import { useState, useContext, createContext } from "react";
import useLoading from "./useLoading";

const AppContext = createContext("");

const AppProvider = ({ children }) => {
  const [currentMenu, setMenu] = useState("Home");
  const [time, setTime] = useState(1000);
  const { isLoading } = useLoading(time);

  const setCurrentMenu = (menu) => {
    setMenu(menu);
  };
  const setCurrentLoading = (time) => {
    setTime(time);
  };
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setCurrentLoading,
        setCurrentMenu,
        currentMenu
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
