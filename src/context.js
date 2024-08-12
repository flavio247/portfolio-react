import { useState, useContext, createContext } from "react";


const AppContext = createContext("");

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  //SIDEBAR FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //Aggiorno lo state con la posizione in cui ho cliccato sulla ricetta
  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  //Imposto state dello scroll position a 0
  const deleteScrollPosition = () => {
    setScrollPosition(0);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition,
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
