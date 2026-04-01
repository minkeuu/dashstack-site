import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";
import notify from "../../assets/notify.svg"
import userAvatar from "../../assets/avatarUser.svg"
import ManageAccount from "../../assets/buttons/manage-account.svg?react";
import ChangePassword from "../../assets/buttons/change-password.svg?react";
import ActivityLog from "../../assets/buttons/activity-log.svg?react";
import LogOut from "../../assets/buttons/log-out.svg?react";
import languageSvg from "../../assets/UK Flag.svg"
import UKSvg from "../../assets/UK Flag.svg?react";
import FrenchLang from "../../assets/buttons/french.svg?react";
import SpanishLang from "../../assets/buttons/spanish.svg?react";
import SelectLang from "../../assets/icons/selectLang.svg?react";
import Settings from "../../assets/buttons/Frame 24.svg?react";
import EventUpdate from "../../assets/buttons/Frame 25.svg?react";
import Profile from "../../assets/buttons/Frame 26.svg?react";
import ApplicationError from "../../assets/buttons/Frame 27.svg?react";
import { useState, useRef, useEffect } from "react";
export default function Navbar() {
  const [active, setActive] = useState(null);
  const [selectLang, setSelectLang] = useState("English");
  const menuRef = useRef(null);
    useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);
  return (
     <nav className="w-full h-[70px] bg-[#273142] flex items-center justify-between select-none">
      <div className="h-[70px] w-[900px] flex items-center px-5">
          <SearchBar className="h-[38px] w-[388px]" placeholder="Search"></SearchBar>
      </div>
      <div className="w-[600px] h-full flex items-center justify-center" ref={menuRef}>

        <div className="relative w-[200px] h-full flex items-center justify-end px-5" data-dropdown="notify" onClick={() => setActive(active === "notify" ? null : "notify")}>
          <img src={notify} alt="" />
          {active === "notify" && (
            <div className="absolute top-full -translate-y-1 z-[120] w-[300px] h-[333px] bg-[#273142] rounded-[14px] flex flex-col">
              <div className="text-[15px] border-b border-[#979797]/20 h-[50px] flex items-center px-5">Notification</div>
              <ul className="px-2 flex flex-col flex-1 px-5">
                <li className="w-full flex-1 flex items-center gap-3">
                  <Settings/>
                  <ul className="flex flex-col">
                    <span className="text-[16px]">Settings</span>
                    <span className="text-[14px] text-[#B5B5B5]">Update Dashboard</span>
                  </ul>
                </li>
                <li className="w-full flex-1 flex items-center gap-3">
                  <EventUpdate/>
                  <ul className="flex flex-col">
                    <span className="text-[16px]">Event Update</span>
                    <span className="text-[14px] text-[#B5B5B5]">An event date update again</span>
                  </ul>
                </li>
                <li className="w-full flex-1 flex items-center gap-3">
                  <Profile/>
                  <ul className="flex flex-col">
                    <span className="text-[16px]">Profile</span>
                    <span className="text-[14px] text-[#B5B5B5]">Update your profile</span>
                  </ul>
                </li>
                <li className="w-full flex-1 flex items-center gap-3">
                  <ApplicationError/>
                  <ul className="flex flex-col">
                    <span className="text-[16px]">Application Error</span>
                    <span className="text-[14px] text-[#B5B5B5]">Check Your runnung application</span>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative w-[200px] h-full 0 flex items-center gap-4 justify-center cursor-pointer" onClick={() => setActive(active === "language" ? null : "language")}>
          <img src={languageSvg} alt="" className="rounded-md"/>
          <div>
          <p className="text-white">English</p>
          </div>
          <IoIosArrowDown className="text-white" size={10}/>
          {active === "language" && (
            <div className="absolute top-full -translate-y-1 z-[120] w-[254px] h-[228px] bg-[#273142] rounded-[16px] flex flex-col" data-dropdown="language">
              <div className="text-[15px] border-b border-[#979797]/20 h-[50px] flex items-center px-5">Select Language</div>
              <ul className="px-2 flex flex-col flex-1">
                <li className="flex-1 flex items-center">
                  <button className="w-full text-left py-2 px-4 flex items-center gap-4" onClick={() => setSelectLang("English")}><UKSvg/>English
                  </button> 
                  {selectLang === "English" && <span><SelectLang/></span>}
                </li>
                <li className="flex-1 flex items-center">
                  <button className="w-full text-left py-2 px-4 flex items-center gap-4" onClick={() => setSelectLang("French")}><FrenchLang/>French</button>
                  {selectLang === "French" && <span><SelectLang/></span>}
                </li>
                <li className="flex-1 flex items-center">
                  <button className="w-full text-left py-2 px-4 flex items-center gap-4" onClick={() => setSelectLang("Spanish")}><SpanishLang/>Spanish</button>
                  {selectLang === "Spanish" && <span><SelectLang/></span>}
                </li>
              </ul>
            </div>
          )}
      </div>

        <div className="w-[300px] h-full flex items-center gap-7 justify-center px-6">
          <img className="h-[50px] w-[50px] rounded-full bg-white" src={userAvatar} alt="" />
          <div className="flex flex-col">
            <p className="font-semibold text-white">Moni Roy</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
          <div className="relative h-[20px] w-[20px] flex items-center justify-center rounded-full border-gray-500 border-[0.2px] cursor-pointer" data-dropdown="profile" onClick={() => setActive(active === "profile" ? null : "profile")}>
            <IoIosArrowDown className="text-white" size={10}/>
            {active === "profile" && (
            <div className="absolute right-1 mt-5 top-full z-[50] overflow-hidden w-[205px] h-[175px] bg-[#273142] rounded-[14px]">
              <ul className="divide-y divide-[#979797]/10 px-2">
                <li className="">
                  <button className="w-full text-left py-2 px-4 flex items-center gap-2"><ManageAccount/> Manage Account</button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 flex items-center gap-2"><ChangePassword/> Change Password</button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 flex items-center gap-2"><ActivityLog/> Activity Log</button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 flex items-center gap-2"><LogOut/> Log Out</button>
                </li>
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
