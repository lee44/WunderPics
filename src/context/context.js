import React, { useContext } from "react";
import jsonData from "../response";

const WunderContext = React.createContext();

const WunderProvider = ({ children }) => {
  const loadData = JSON.parse(JSON.stringify(jsonData));

  // console.log(loadData);

  return (
    <WunderContext.Provider value={{ loadData }}>
      {children}
    </WunderContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(WunderContext);
};

export { WunderContext, WunderProvider };
