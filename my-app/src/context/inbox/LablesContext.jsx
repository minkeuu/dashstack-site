import { useContext, createContext, useState } from "react";

const lablesContext = createContext();

export function LablesProvider({ children }) {
    const [labels, setLabels] = useState({
    Primary: false,
    Social: false,
    Work: false,
    Friends: false,
  });
  
  return (
    <lablesContext.Provider value={{ labels, setLabels }}>
        {children}
    </lablesContext.Provider>
  )
}

export function useLabels() {
    return useContext(lablesContext)
}