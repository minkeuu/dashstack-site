import { NavLink } from "react-router-dom";
import { SideBarItem } from "./SideBarItem";
import logo from "../../assets/logo/Logo.svg"
export default function Sidebar() {
  const navClass = "w-[192px] py-3 rounded-[6px] text-white flex items-center justify-center font-medium transition-all";
  const firstSection = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/products", label: "Products" },
    { to: "/favorite", label: "Favorite" },
    { to: "/inbox", label: "Inbox" },
    { to: "/orderLists", label: "Order Lists" },
    { to: "/productStock", label: "Product Stock" },
  ];

  const secondSection = [
    { to: "/pricing", label: "Pricing" },
    { to: "/toDo", label: "To-Do" },
    { to: "/contact", label: "Contact" },
    { to: "/team", label: "Team" },
  ];

  const thirdSection = [
    { to: "/settings", label: "Settings" },
    { to: "/logout", label: "Logout" },
  ];

  return (
    <div className="h-screen w-[300px] bg-[#273142] relative z-10">
      <div className="flex items-center h-[70px] w-[330px] justify-center">
        <img src={logo} alt=""/>
      </div>
      <div className="h-[320px] w-full flex justify-center items-center flex-col gap-1 border-b-[0.5px] border-gray-300/10 text-white">
        
        {firstSection.map(item => (
          <SideBarItem
            key={item.to}
            to={item.to}
            label={item.label}
            navClass={navClass}
          />
        ))}

      </div>

      <div className="h-[240px] w-full flex justify-center items-center flex-col gap-1 border-b-[0.5px] border-gray-300/10 text-white">
        <div className="h-[40px] w-[230px] items-end flex">
          <p className="font-nunito font-md text-[12px] text-gray-300">PAGES</p>
        </div>
          {secondSection.map(item => (
          <SideBarItem
            key={item.to}
            to={item.to}
            label={item.label}
            navClass={navClass}
          />
        ))}
      </div>

        <div className="h-[105px] w-full flex justify-center items-center flex-col gap-1 text-white">
          {thirdSection.map(item => (
          <SideBarItem
            key={item.to}
            to={item.to}
            label={item.label}
            navClass={navClass}
          />
        ))}
      </div>
    </div>
  );
}
