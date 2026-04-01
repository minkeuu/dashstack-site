import React, { useState, useEffect, useRef, useContext} from "react";
import { MonthContext } from "../graphs/SelectedMonth";
export default function CustomSelect({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { month, setMonth } = useContext(MonthContext);
  const menuRef = useRef(null)
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
  <div className="relative w-40" ref={menuRef}>
    <div
      className="border-[0.5px] border-gray-300/10 rounded px-4 py-2 cursor-pointer flex justify-between items-center bg-[#323D4E] text-white font-nunito"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{selected}</span>

      <svg
        className={`w-4 h-4 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    {isOpen && (
      <ul className="absolute z-10 left-0 mt-1 w-full bg-[#323D4E] text-white font-nunito border-[0.5px] border-gray-300/10 rounded shadow-md max-h-40 overflow-y-auto custom-scrollbar">
        {options.map((option) => (
          <li
            key={option}
            className="px-4 py-2 hover:bg-[#2C3442] cursor-pointer"
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
);
}
