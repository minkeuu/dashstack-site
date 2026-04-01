import { createContext, useState } from "react";

// 1. Создали "коробку"
export const MonthContext = createContext();

// 2. Создали "обёртку", которая хранит месяц
export function MonthProvider({ children }) {
  const [month, setMonth] = useState("December"); // тут месяц хранится
  return (
    <MonthContext.Provider value={{ month, setMonth }}>
      {children}  {/* всё, что внутри обёртки, сможет видеть месяц */}
    </MonthContext.Provider>
  );
}
