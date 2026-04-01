import React from "react";
import { useState, useRef, useEffect } from "react";
import FilterIcon from "../assets/icons/filter.svg?react";
import ArrowTop from "../assets/buttons/arrowTopBtn.svg?react";
import Return from "../assets/buttons/return.svg?react";
import ArrowRight from "../assets/buttons/arrowRightBtn.svg?react";
import ArrowLeft from "../assets/buttons/arrowLeftBtn.svg?react";
import OrderItem from "../components/orderLists/orderItem";

export default function OrderLists() {
  
  const data = [
    { name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "04 Sep 2019", type: "Electric", status: "completed" }, 
    { name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "28 May 2019", type: "Book", status: "processing" }, 
    { name: "Darrell Caldwell", address: "8587 Frida Ports", date: "23 Nov 2019", type: "Medicine", status: "rejected" }, 
    { name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Mobile", status: "completed" }, 
    { name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "processing" }, 
    { name: "Alfred Murray", address: "543 Weimann Mountain", date: "15 Aug 2019", type: "Medicine", status: "completed" }, 
    { name: "Maggie Sullivan", address: "New Scottieberg", date: "21 Dec 2019", type: "Watch", status: "processing" }, 
    { name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "hold" }, 
    { name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Book", status: "transit" },
  ]

  const lists = data.map((item, index) => ({
    id: String(index + 1).padStart(4, "0"), // или `${index+1}` если нужны только числа
    ...item
  }));
// {day} {monthDate[month]} {year}
  const [open, setOpen] = useState(null);
  const [chooseDate, setChooseDate] = useState(null);
  const setDate = new Date();
  const [year, setYear] = useState(setDate.getFullYear());
  const [month, setMonth] = useState(setDate.getMonth());
  const [day, setDay] = useState(setDate.getDate())
  const monthTranslate = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const orderTypes = [
    { id: "health", label: "Health & Medicine" },
    { id: "book", label: "Book & Stationary" },
    { id: "services", label: "Services & Industry" },
    { id: "fashion", label: "Fashion & Beauty" },
    { id: "home", label: "Home & Living" },
    { id: "electronics", label: "Electronics" },
    { id: "mobile", label: "Mobile & Phone" },
    { id: "accessories", label: "Accessories" },
  ];

  const statusTypes = [
    { id: "completed", label: "Completed" },
    { id: "processing", label: "Processing" },
    { id: "rejected", label: "Rejected" },
    { id: "hold", label: "On Hold" },
    { id: "transit", label: "In Transit" },
  ];

  const [orderType, setOrderType] = useState(new Set());
  

  function toggleOrderType(id) {
    setOrderType((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    })
  }

  const [statusType, setStatusType] = useState(new Set())

  function toggleStatusType(id) {
    setStatusType((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id)
      return next;
    })
  }

  function nextMonth(month, year) {
    if (month === 11) {
      return { month: 0, year: year + 1}
    }
    return { month: month + 1, year}
  }

  function prevMonth(month, year) {
    if (month === 0) {
      return { month: 11, year: year - 1 };
    }
    return { month: month - 1, year };
  }


  function handleNext() {
    const res = nextMonth(month, year);
    setMonth(res.month);
    setYear(res.year);
  }

  function handlePrev() {
    const res = prevMonth(month, year);
    setMonth(res.month);
    setYear(res.year);
  }


  function buildCalendar(year, month) {
  const cells = [];

  // дни текущего месяца
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // день недели для 1 числа месяца (0 = воскресенье)
  const startDay = new Date(year, month, 1).getDay();
  // последний день предыдущего месяца
  const lastDayPrevMonth = new Date(year, month, 0).getDate();

  // пустые дни предыдущего месяца (если неделя начинается с понедельника)
  const emptyDays = startDay === 0 ? 6 : startDay - 1;
  for (let i = emptyDays; i > 0; i--) {
    cells.push(lastDayPrevMonth - i + 1);
  }

  // дни текущего месяца
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  // пустые дни следующего месяца, чтобы всего было 42 ячейки (6 недель)
  const totalCells = 42;
  const nextMonthDays = totalCells - cells.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    cells.push(i);
  }

  return cells;
}


  const calendar = buildCalendar(year, month)
  // getDaysInMonth(year, month, day)

  const dataRef = useRef(null);
  const orderRef = useRef(null);
  const statusRef = useRef(null);
  
  const refs = [dataRef, orderRef, statusRef]
  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedMenu = refs.some((ref) => ref.current && ref.current.contains(e.target))
      if (!clickedMenu) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  console.log(chooseDate)
  console.log(orderType)
  console.log(statusType)

  const orderTypeMap = {
    health: ["Medicine"],
    book: ["Book"],
    electronics: ["Electric"],
    mobile: ["Mobile"],
    fashion: ["Watch"],
    // остальные пока просто не используются
  };

  const statusMap = {
    completed: ["completed"],
    processing: ["processing"],
    rejected: ["rejected"],
    hold: ["hold"],
    transit: ["transit"],
  };

  function parseOrderDate(dateStr) {
    const [day, monthStr, year] = dateStr.split(" ");
    return new Date(`${year}-${monthStr}-${day}`);
  }


  const filteredList = lists.filter((item) => {
    /* ---------- DATE ---------- */
    if (chooseDate) {
      const orderDate = parseOrderDate(item.date);

      const sameDay =
        orderDate.getFullYear() === chooseDate.getFullYear() &&
        orderDate.getMonth() === chooseDate.getMonth() &&
        orderDate.getDate() === chooseDate.getDate();

      if (!sameDay) return false;
    }

    /* ---------- ORDER TYPE ---------- */
    if (orderType.size > 0) {
      const allowedTypes = [...orderType].flatMap(
        (id) => orderTypeMap[id] || []
      );

      if (!allowedTypes.includes(item.type)) {
        return false;
      }
    }

    /* ---------- STATUS ---------- */
    if (statusType.size > 0) {
      const allowedStatuses = [...statusType].flatMap(
        (id) => statusMap[id] || []
      );

      if (!allowedStatuses.includes(item.status)) {
        return false;
      }
    }

    return true;
  });

  const chooseDateLabel = chooseDate
  ? `${chooseDate.getDate()} ${monthTranslate[chooseDate.getMonth()]} ${chooseDate.getFullYear()}`
  : "Date";

  const typeLabel = orderType.size > 0
  ? orderTypes.find(o => o.id === [...orderType][0])?.label || "Order Type"
  : "Order Type";

   const statusLabel = statusType.size > 0
  ? statusTypes.find(o => o.id === [...statusType][0])?.label || "Order Status"
  : "Order Status";


  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "short"
  }).format(new Date(year, month));

  function resetFilters() {
    setChooseDate(null);
    setOrderType(new Set());
    setStatusType(new Set());
  }

  return (
    <div className="h-full w-full px-4 flex flex-col ">
      <div className="h-[70px] w-full flex items-center">
        <h1 className="text-white text-[32px] font-nunito font-bold">Order Lists</h1>
      </div>
        
        <div className="flex-1 w-full flex gap-5 flex-col select-none">
          <div className="h-[70px] w-[820px] bg-[#273142] rounded-[10px] grid grid-cols-[70px_120px_130px_180px_160px_160px] divide-x divide-[#979797]/20 font-medium">
            <div className="flex items-center justify-center "><FilterIcon/></div>
            <div className="flex items-center justify-center">
              <p>Filter By</p>
            </div>
            <div className="relative flex items-center justify-center" ref={dataRef}>
              <div className="flex items-center justify-center gap-3 cursor-pointer"  onClick={() => setOpen(open === "date" ? null : "date")}>
                <p className={`${open === "date" ? "opacity-60" : ""}`}>{chooseDateLabel}</p>
                <ArrowTop className={`${open === "date" ? "opacity-60" : ""}`}/>
              </div>
              {open === "date" && 
              (
                <div className="absolute w-[350px] h-[500px] bg-[#323D4E] top-[80%] z-20 rounded-[26px] grid grid-rows-[70px_55px_1fr_120px]">
                  <div className="w-full border-b border-[#979797]/20 flex p-7">
                    <div className="w-1/2 flex items-center">
                      <p className="font-bold text-[15px]">{monthTranslate[month]} {year}</p>
                    </div>
                    <div className="w-1/2 flex items-center gap-3 justify-end">
                      <div className="h-6 w-6 bg-[#475365] rounded flex items-center justify-center" onClick={() => handlePrev() && console.log(month, year)}><ArrowLeft className="opacity-70"/></div>
                      <div className="h-6 w-6 bg-[#475365] rounded flex items-center justify-center" onClick={() => handleNext() && console.log(month, year)}><ArrowRight className="opacity-70"/></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 px-3 gap-2 items-center">
                    {["S","M","T","W","T","F","S"].map((d,i) => (
                      <div className="h-8 w-8 flex items-center justify-center" key={i}>{d}</div>
                    ))}
                  </div>
                  <div className="px-3 w-full border-b border-[#979797]/20 grid grid-cols-7 grid-rows-6 gap-2">
                    
                    {calendar.map((day, index) => (
                      <div
                        key={index}
                        className="
                          h-8 w-8 flex items-center justify-center
                          rounded-[10px] cursor-pointer
                          hover:bg-[#6085FF]
                        " onClick={() => setChooseDate(new Date(year, month, day))}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex items-center flex-col px-7">
                    <div className="h-[50px] w-full flex items-center">
                      <p className="text-[14px] opacity-80">*You can choose multiple date</p>
                    </div>
                    <div className="h-[50px] w-full flex items-center justify-center">
                      <button className="h-[40px] w-[150px] bg-[#4880FF] rounded-[6px]">
                        <p className="font-bold">Apply now</p>
                      </button>
                    </div>
                  </div>
                </div>
              )
              }
            </div>
            <div className="flex items-center justify-center  relative" ref={orderRef}>
              <div className="flex items-center justify-center gap-3 cursor-pointer w-[160px]" onClick={() => setOpen(open === "order" ? null : "order")}>
                <p>{typeLabel}</p>
                <ArrowTop/>
              </div>
              <div className=" flex items-center justify-center">
                {open === "order" && (
                  <div className="absolute w-[600px] h-[350px] bg-[#323D4E] top-[80%] z-20 rounded-[26px] grid grid-rows-[70px_1fr_115px]">
                    <div className="w-full flex p-7">
                      <div className="w-1/2 flex items-center">
                        <p className="font-bold text-[18px]">Select Order Type</p>
                      </div>
                    </div>
                    <div className="w-full px-5 py-3 gap-3 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
                      {orderTypes.map((item) => (
                        <button key={item.id} className={`h-[35px] rounded-[17px] border border-[#969696] ${orderType.has(item.id) ? "bg-[#4880FF] border-none" : ""}`} onClick={() => toggleOrderType(item.id)}>
                          {item.label}
                        </button>
                      ))}
                    </div>
                    <div className="w-full flex items-center flex-col px-7">
                      <div className="h-[50px] w-full flex items-center">
                        <p className="text-[14px] opacity-80">*You can choose multiple Order Type</p>
                      </div>
                      <div className="h-[50px] w-full flex items-center justify-center">
                        <button className="h-[40px] w-[150px] bg-[#4880FF] rounded-[6px]">
                          <p className="font-bold">Apply now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 cursor-pointer relative" ref={statusRef}>
              <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={() => setOpen(open === "status" ? null : "status")}>
                <p>{statusLabel}</p>
                <ArrowTop/>
              </div>
              <div className=" flex items-center justify-center">
                {open === "status" && (
                  <div className="absolute w-[600px] h-[310px] bg-[#323D4E] top-[80%] z-20 rounded-[26px] grid grid-rows-[70px_110px_115px]">
                    <div className="w-full flex p-7">
                      <div className="w-1/2 flex items-center">
                        <p className="font-bold text-[18px]">Select Order Type</p>
                      </div>
                    </div>
                    <div className="w-full px-5 py-2 gap-3 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
                      {statusTypes.map((item) => (
                        <button key={item.id} className={`h-[35px] rounded-[17px] border border-[#969696] ${statusType.has(item.id) ? "bg-[#4880FF] border-none" : ""}`} onClick={() => toggleStatusType(item.id)}>
                          {item.label}
                        </button>
                      ))}
                    </div>
                    <div className="w-full flex items-center flex-col px-7">
                      <div className="h-[50px] w-full flex items-center">
                        <p className="text-[14px] opacity-80">*You can choose multiple Order Type</p>
                      </div>
                      <div className="h-[50px] w-full flex items-center justify-center">
                        <button className="h-[40px] w-[150px] bg-[#4880FF] rounded-[6px]">
                          <p className="font-bold">Apply now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 cursor-pointer" onClick={resetFilters}>
              <Return className="text-[#FF8743]"/>
              <p className="text-[#FF8743] truncate">Reset filter</p>
            </div>
          </div>
          
          <div className="h-[670px] w-full rounded-[14px] bg-[#273142] flex flex-col">
            <div className="h-[50px] w-full bg-[#323D4E] rounded-t-[14px] grid grid-cols-[120px_1fr_1fr_1fr_1fr_200px] px-10 items-center font-extrabold opacity-95">
              
              <div className="">
                <p>ID</p>
              </div>
              <div className="">
                <p>NAME</p>
              </div>
              <div className="">
                <p>ADDRESS</p>
              </div>
              <div className="">
                <p>DATE</p>
              </div>
              <div className="">
                <p>TYPE</p>
              </div>
              <div className="">
                <p>STATUS</p>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {filteredList.map((item) => <OrderItem key={item.id} id={item.id} name={item.name} address={item.address} date={item.date} type={item.type} status={item.status} {...item}/>)}
            </div>
          </div>
        </div> 
        
    </div>
  );
}
