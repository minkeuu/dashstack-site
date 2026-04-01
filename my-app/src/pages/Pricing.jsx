import React from "react";
import Card from "../components/pricing/card";
export default function Pricing() {
  return (
    <div className="h-full w-full px-4 flex flex-col" >
          <div className="h-[70px] w-full flex items-center">
            <h1 className="text-white text-[32px] font-nunito font-bold">Pricing</h1>
          </div>
          <div className="w-full flex-1 items-center flex justify-between">
            <Card title="Basic" price="$14.99" activeText="3"/>
            <Card title="Standart" price="$49.99" activeText="5"/>
            <Card title="Premium" price="$89.99" activeText="7"/>
          </div>
    </div>
  );
}
