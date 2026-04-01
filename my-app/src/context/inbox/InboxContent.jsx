import { createContext, useContext, useState } from "react";

const InboxContext = createContext();

export function InboxProvider({ children }) {
    const [star, setStar] = useState([])

    function toggleStar(item) {
        const exists = star.some((star) => star.id === item.id)

        if (exists) {
            setStar(star.filter((star) => star.id !== item.id))
        } else {
            setStar([...star, item])
        }
    }

    return (
        <InboxContext.Provider value={{star, toggleStar}}>
            {children}
        </InboxContext.Provider>
    )
}

export function useStar() {
    return useContext(InboxContext)
}