import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { ProdCard } from "../components/product/ProdCard";
export default function Favorite() {
  const { favorites } = useFavorites();

  return (
      <div className="h-full w-full px-4 space-y-4 ">
        <div className="h-[70px] w-full flex items-center">
        <h1 className="text-white text-[32px] font-nunito font-bold">Favorite</h1>
      </div>

          <div className="h-[400px] w-full flex items-center gap-8">
            
            {favorites.map(item => (
              <ProdCard key={item.id} {...item} />
            ))}
          </div> 
          
      </div>
  );
}

