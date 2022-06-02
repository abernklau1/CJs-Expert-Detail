import { useReducer, useContext, createContext } from "react";
import reducer from "./reducer";

const initialState = {
  services: [
    {
      name: "Interior",
      price: "$200",
      desc: ["Vacuum", "Shampoo", "Wipe down"],
    },
    {
      name: "Full Detail",
      price: "$350",
      desc: [
        "Everything Interior offers plus...",
        "Polish",
        "Paint Correction",
        "Engine bay wipe down",
        "Wheel clean and shine",
      ],
    },
  ],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
