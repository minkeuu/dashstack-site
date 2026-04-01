import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
export default function SearchBar({ placeholder, className, msg, setMsg }) {
  const enter = (e) => {
    if (e.key === "Enter") {
      setMsg(inputRef.target.value)
    }
  }
  const inputRef = useRef(null);
  return (
    <div className="flex items-center h-full">
        <div className={`${className} bg-[#323D4E] flex items-center px-5 rounded-full gap-3`}>
        <CiSearch className="text-white" />
        <input type="text" placeholder={`${placeholder}`} ref={inputRef} className="bg-transparent text-white focus:outline-none w-full"  onChange={(e) => setMsg(e.target.value)} value={msg} onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(inputRef.current.value);
          }
        }}/>
        </div>
    </div>
  );
}
