import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(item) {
    const exists = favorites.some((fav) => fav.id === item.id);

    if (exists) {
      // удалить
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      // добавить
      setFavorites([...favorites, item]);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
