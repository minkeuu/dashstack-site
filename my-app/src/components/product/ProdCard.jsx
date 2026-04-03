import Rating from "./Rating"
import { useState, useEffect } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import Favorite from "../../assets/buttons/favorite.svg";
import FavActive from "../../assets/buttons/favorite-active.svg";
export function ProdCard({ imageSrc, label, cost, id, rating, number}) {
  const { favorites, toggleFavorite } = useFavorites();
  
  const isFavorite = favorites.some(f => f.id === id);
    return (
          <div className="h-[400px] w-[340px] bg-[#273142] rounded-[20px] overflow-hidden">
           <div className="h-[230px] w-full bg-white relative">
                {/* Картинка */}
                <img src={imageSrc} alt="" className="h-full w-full object-contain" />

                {/* Левая кнопка */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[70px] flex justify-center items-center z-10 ">
                    <div className="h-[41px] w-[41px] bg-[#3B465A] rounded-full flex items-center justify-center cursor-pointer">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 0L0.000156403 6L6.00016 12L7.41016 10.59Z" fill="#ffffff"/>
                    </svg>
                    </div>
                </div>

                {/* Правая кнопка */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70px] flex justify-center items-center z-10">
                    <div className="h-[41px] w-[41px] bg-[#3B465A] rounded-full flex items-center justify-center cursor-pointer">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="#ffffffff"/>
                    </svg>
                    </div>
                </div>
            </div>

            <div className="h-[170px] w-full flex items-center">
              <div className="h-full w-[300px] flex flex-col justify-center px-6 font-nunito gap-4">

                <div className="flex flex-col items-start gap-1">
                  <span className="font-bold text-[18px]">{label}</span>
                  <span className="text-[#6091FF] font-bold">{cost}</span>
                  <Rating rating={rating} number={number}/>
                </div>

                <button className="h-[38px] w-[150px] bg-[#4B5668] rounded-[12px] flex items-center justify-center font-bold">
                  Edit Product
                </button>
              </div>

              <div className="h-full w-[100px] flex justify-center py-6">
                <img src={isFavorite ? FavActive : Favorite} alt="" className="h-[44px] w-[44px] cursor-pointer" onClick={() => toggleFavorite({ id, imageSrc, label, cost, number, rating })}/>
              </div>
            </div>
          </div>
    )
}