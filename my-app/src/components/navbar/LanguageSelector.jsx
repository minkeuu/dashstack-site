import { IoIosArrowDown } from "react-icons/io";
import languageSvg from "../../assets/UK Flag.svg"
import UKSvg from "../../assets/UK Flag.svg?react";
import FrenchLang from "../../assets/buttons/french.svg?react";
import SpanishLang from "../../assets/buttons/spanish.svg?react";
import SelectLang from "../../assets/icons/selectLang.svg?react";
import { useState, useRef, useEffect } from "react";
export default function LanguageSelector({active, setActive}) {
  const [selectLang, setSelectLang] = useState("English");

  useEffect(() => {
  function handleClickOutside(e) {
    const dropdown = e.target.closest("[data-dropdown]");

    // если клик вне любого dropdown
    if (!dropdown) {
      setActive(null);
      return;
    }

    // если клик внутри ДРУГОГО dropdown
    if (dropdown.dataset.dropdown !== active) {
      setActive(null);
    }
  }

  document.addEventListener("pointerdown", handleClickOutside);
  return () => document.removeEventListener("pointerdown", handleClickOutside);
}, [active]);

  return (
    <div ref={menuRef} className="relative w-[200px] h-full 0 flex items-center gap-4 justify-center cursor-pointer" onClick={() => setActive(active === "language" ? null : "language")}>
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
  );
}
