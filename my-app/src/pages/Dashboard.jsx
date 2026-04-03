import React, { useEffect, useRef, useState, useContext } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import CustomSelect from "../components/selectors/Selector";
import SalesChart from "../components/graphs/SalesChart";
import DealsCard from "../components/dashboard/DealsCard";
import { MonthContext } from "../components/graphs/SelectedMonth";
import AppleWatch from "../src/assets/icons/appleWatch.svg";
export default function Dashboard() {
  const menuRef = useRef(null);
  const menuRef1 = useRef(null);
  const { setMonth } = useContext(MonthContext);
  const [dealStatus, setDealStatus] = useState("Delivered"); // default

  const deals = [
  {
    icon: AppleWatch,
    prodName: "Apple Watch",
    loc: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "delivered",
  },
  {
    icon: AppleWatch,
    prodName: "Apple Watch",
    loc: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "pending",
  },
  {
    icon: AppleWatch,
    prodName: "Apple Watch",
    loc: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "rejected",
  },
];


  return (
    <div className="h-full w-full px-4">

      <div className="h-[70px] w-full flex items-center">
        <h1 className="text-white text-[32px] font-nunito font-bold">Dashboard</h1>
      </div>

      <div className="h-[750px] w-full space-y-10 pt-3">
        <div className="h-[170px] w-[1500px] flex items-center justify-between ">
        <StatsCard 
          title="Total User"
          value="40,689"
          icon="./src/assets/icons/members.svg"
          percent="8.5%"
          percentColor="#00B69B" 
          trend="up"
          subtitle="Up from yesterday">
        </StatsCard>

        <StatsCard 
          title="Total Order"
          value="10,293"
          icon="./src/assets/icons/orders.svg"
          percent="1.3%"
          percentColor="#00B69B"
          trend="up"
          subtitle="Up from past week">
        </StatsCard>
        
        <StatsCard 
          title="Total Sales"
          value="$89,000"
          icon="./src/assets/icons/sales.svg"
          percent="4.3%"
          percentColor="#F93C65"
          trend="down"
          subtitle="Down from yesterday">
        </StatsCard>

       <StatsCard 
          title="Total Pending"
          value="2040"
          icon="./src/assets/icons/pending.svg"
          percent="1.8%"
          trend="up"
          percentColor="#00B69B"
          subtitle="Up from yesterday">
        </StatsCard>
        </div>

        <div className="h-[450px] w-[1500px] bg-[#273142] rounded-[14px] border-[0.5px] border-gray-300/10 px-7 py-5">
          <div className="h-[60px] w-full flex items-center justify-between">
            <h1 className="font-nunito text-[24px] font-bold text-white">Sales Details</h1>
            <CustomSelect
              options={["December", "January", "February", "March", "April", "May", "June", "July", "August", "October", "November"]}
              defaultValue="December"
              onChange={setMonth}
            />

          </div>
          <SalesChart></SalesChart>
        </div>

        <div className="h-[400px] w-[1500px] bg-[#273142] rounded-[14px] border-[0.5px] border-gray-300/10 px-7 py-5">
          <div className="h-[60px] w-full flex items-center flex justify-between">
            <h1 className="font-nunito text-[24px] font-bold text-white">Deals Details</h1>
            <CustomSelect
              options={["Delivered", "Pending", "Rejected"]}
              defaultValue="Delivered"
              onChange={(value) => setDealStatus(value.toLowerCase())}
            />
          </div>
          <div className="h-[300px] w-full">

            <div className="h-[70px] w-full bg-[#323D4E] rounded-[12px] flex items-center justify-between px-7 font-nunito font-semibold">
              <div className="w-[170px] flex items-center">Product Name</div>
              <div className="w-[190px] flex items-center ">Location</div>
              <div className="w-[180px] flex items-center  ">Date - Time</div>
              <div className="w-[300px] flex items-center justify-around">
                <p>Piece</p>
                <p>Amount</p>
              </div>
              <div className="w-[200px] flex items-center justify-center">Status</div>
            </div>

            {deals
              .filter(deal => deal.status === dealStatus)
              .map((deal, index) => (
                <DealsCard
                  key={index}
                  icon={deal.icon}
                  prodName={deal.prodName}
                  loc={deal.loc}
                  dateTime={deal.dateTime}
                  piece={deal.piece}
                  amount={deal.amount}
                  status={deal.status}
                />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
