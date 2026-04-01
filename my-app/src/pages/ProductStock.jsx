import React, { useState } from "react";
import Product from "../components/productStock/product";
import SearchBar from "../components/navbar/SearchBar";
import ArrowLeft from "../assets/buttons/arrowLeftBtn.svg?react";
import ArrowRight from "../assets/buttons/arrowRightBtn.svg?react";
import { v4 as uuid } from "uuid";
export default function ProductStock() {
   const rawProducts = [
    {
      slug: "apple-watch",
      image: "apple-watch.png",
      name: "Apple Watch Series 4",
      category: "Digital Product",
      price: "$690.00",
      piece: "63",
    },
    {
      slug: "microsoft-headsquare",
      image: "bitmap-1.png",
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      piece: "13",
    },
    {
      slug: "womens-dress",
      image: "bitmap-2.png",
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      piece: "635",
    },
    {
      slug: "samsung-a50",
      image: "bitmap-3.png",
      name: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: "67",
    },
    {
      slug: "camera",
      image: "bitmap-4.png",
      name: "Camera",
      category: "Electronic",
      price: "$420.00",
      piece: "52",
    },
    {
      slug: "microsoft-headsquare",
      image: "bitmap-1.png",
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      piece: "13",
    },
    {
      slug: "womens-dress",
      image: "bitmap-2.png",
      name: "Women's Dress",
      category: "Fashion",
      price: "$640.00",
      piece: "635",
    },
  ];

  
  const [products, setProducts] = useState(
    rawProducts.map((p) => ({
      ...p,
      id: uuid(),
    }))
  )

  const getProductImage = (p) => {
    return `/images/products/${p.image}`;
  };

  const [message, setMessage] = useState("");

  const filteredProducts = products.filter((p) => (
    p.name.toLowerCase().includes(message.toLowerCase())
  ))
  
  const deleteProducts = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }
  return (
    <div className="h-full w-full px-4 flex flex-col" >
      <div className="h-[70px] w-full flex items-center justify-between">
        <h1 className="text-white text-[32px] font-nunito font-bold">Product Stock</h1>
        <SearchBar placeholder="Search product name" className="h-[40px] w-[300px]" msg={message} setMsg={setMessage}/>
      </div>
      

      <div className="h-[800px] w-full bg-[#273142] rounded-[14px] flex flex-col">
        <div className="w-full h-[50px] bg-[#323D4E] items-center rounded-t-[8px] px-12 grid grid-cols-[160px_270px_270px_190px_180px_275px_50px]">
          <div className="">Image</div>
          <div>Product Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Piece</div>
          <div className="">Available Color</div>
          <div className="">Action</div>
        </div>
        <div className="divide-y divide-[#979797]/20 flex-1" >
          {filteredProducts.map((p) => <Product key={p.id} img={getProductImage(p)} prodName={p.name} category={p.category} price={p.price} piece={p.piece} onDelete={() => deleteProducts(p.id)}/>)}
        </div>
      </div>
      <div className="h-[100px] w-full flex items-center justify-between">
          <p className="opacity-60 text-[14px] font-semibold">Showing 1-07 of 78</p>
          <div className="h-[35px] w-[100px] bg-[#323D4E] rounded-[8px] flex items-center divide-x divide-[#979797]/40 cursor-pointer">
            <div className="h-full w-1/2 flex justify-center items-center hover:text-[#ffffff]/40"><ArrowLeft className=""/></div>
            <div className="h-full w-1/2 flex justify-center items-center hover:text-[#ffffff]/40"><ArrowRight className=""/></div>
          </div>
        </div>
    </div>
  );
}
