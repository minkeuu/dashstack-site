import React from "react";
import UpCard from "../../assets/ui/up.svg";
import DownCard from "../../assets/ui/down.svg";
export default function StatsCard({ title, value, icon, percent, trend, subtitle }) {
  // Выбираем картинку динамически
  const trendIcon = trend === "up" ? UpCard : DownCard;
  const trendColor = trend === "up" ? "#00B69B" : "#FF4D4F"; // зелёный / красный

  return (
    <div className="h-[170px] w-[350px] flex flex-col bg-[#273142] rounded-[14px] border-[0.5px] border-gray-300/10">
      
      <div className="h-[150px] w-full flex items-center justify-center">
        <div className="h-[80px] w-[250px] flex flex-col px-5 gap-2">
          <p className="font-nunito text-[16px] text-white/70">{title}</p>
          <p className="font-nunito text-[28px] text-white">{value}</p>
        </div>

        <div className="h-full w-[100px] flex items-center justify-center pb-5">
          <img src={icon} alt="" className="h-[60px] w-[60px]" />
        </div>
      </div>

      <div className="h-[80px] w-full flex items-center pl-5 gap-3">
        <img src={trendIcon} alt={trend} className="h-4 w-4" />
        <span className="font-nunito text-[16px]" style={{ color: trendColor }}>
          {percent}
        </span>
        <span className="font-nunito text-[16px] text-white">{subtitle}</span>
      </div>

    </div>
  );
}
