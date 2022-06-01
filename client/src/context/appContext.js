import { useReducer, useContext, createContext } from "react";
import { CHANGE_NAV_COLOR } from "./actions";
import reducer from "./reducer";

const initialState = {
  navColor: "transparent",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = ({ navColor }) => {
    if (navColor) dispatch({ type: CHANGE_NAV_COLOR, payload: { navColor } });
  };

  return (
    <AppContext.Provider value={{ ...state, changeNav }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
