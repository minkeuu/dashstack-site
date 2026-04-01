import { useState } from "react";
import { useStar } from "../../context/inbox/InboxContent"

export function InboxMailItem({ id, name, status, mailDesc, time, onOpenMail, checked, toggleChecked, setChecked}) {
    
    const {star, toggleStar} = useStar();

    const isStar = star.some((star) => star.id === id)
    const [starred, setStarred] = useState(false);
    const btnColor = {
        primary: "#00B69B",
        work: "#FD9A56",
        friends: "#7D3A89",
        social: "#3D369F"
    }
    const label = btnColor[status]
    const hasStatus = Boolean(status);
    return (
       <div className={` grid items-center h-[56px] px-4 cursor-pointer ${hasStatus ? "grid-cols-[40px_40px_180px_100px_1fr_90px]" : "grid-cols-[40px_40px_180px_1fr_90px]" } ${checked ? "bg-[#323D4E]/90" : ""} `}
        onClick={(e) => {
            if (e.target.closest("input") || e.target.closest("svg")) return;
                onOpenMail({ id, name, status, mailDesc, time });
                
            }}
        >
        <div className={`flex justify-center `}>
            <label className="flex items-center gap-3 cursor-pointer select-none h-[40px] px-2">
            {/* Скрытый нативный чекбокс */}
            <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleChecked(id)}
                className="peer hidden"
            />

            <div
                className={`w-[20px] h-[20px] rounded-[3px]
                flex items-center justify-center ${checked ? "bg-white":"border-2 border-[#B3B3B3]"}`}
            >
                <svg
                className={`
                    w-4 h-4
                    ${checked ? "opacity-100" : "opacity-0"} text-black
                `}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                >
                <path d="M5 13l4 4L19 7" />
                </svg>
            </div>
            </label>
        </div>
        
        <div className="flex justify-center">
            <label className="flex items-center gap-3 cursor-pointer select-none h-[20px] px-3">
            {/* Скрытый нативный чекбокс */}
            <input
                type="checkbox"
                checked={starred}
                onChange={(e) => setStarred(e.target.checked)}
                className="peer hidden"
            />

            <div
                className={`w-[30px] h-[50px] 
                flex items-center justify-center`} onClick={() => toggleStar({ id, name, status, mailDesc, time })}
            >
                <svg width="20" height="20" viewBox="0 0 18 18" fill={isStar ? "#FFD56D" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11729 0.916971L11.4967 5.6309L16.0762 6.08459C16.2988 6.10309 16.4903 6.2494 16.5667 6.45931C16.6431 6.66923 16.5904 6.90441 16.4317 7.06165L12.6629 10.7971L14.0602 15.873C14.1186 16.0929 14.0426 16.3266 13.866 16.4701C13.6893 16.6136 13.445 16.6401 13.2417 16.5379L8.59889 14.2389L3.96247 16.535C3.75918 16.6372 3.51484 16.6107 3.33823 16.4673C3.16162 16.3238 3.08559 16.0901 3.14398 15.8701L4.54131 10.7943L0.769596 7.05881C0.610934 6.90156 0.558236 6.66638 0.634625 6.45647C0.711014 6.24655 0.902533 6.10024 1.12515 6.08175L5.70468 5.62806L8.08049 0.916971C8.18012 0.722401 8.3803 0.599998 8.59889 0.599998C8.81748 0.599998 9.01767 0.722401 9.11729 0.916971Z" stroke={isStar ? "" : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            </label>
        </div>

        <div className="font-medium truncate px-3">
            {name}
        </div>

        {hasStatus && (
            <div>
                <span
                style={{ backgroundColor: label }}
                className="px-3 py-1 rounded text-xs font-semibold"
                >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            </div>
        )}

        <div className="text-gray-300 truncate">
            {mailDesc}
        </div>

        <div className="text-sm text-gray-400 text-right">
            {time}
        </div>
        </div>
    )
}