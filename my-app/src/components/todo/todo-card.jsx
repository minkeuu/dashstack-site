import Bin from "../../assets/buttons/bin.svg?react";
import Cancel from "../../assets/buttons/cancel.svg?react";
import { useState} from "react";
import React from "react";
export default function TodoCard({name, deleted, setDeleted, task}) {
    const [star, setStar] = useState(false)
    const [checked, setChecked] = useState(false);
    return ( 
        <div className={`w-full h-[90px] bg-[#273142] rounded-[12px] p-6 ${checked ? "bg-[#4880FF]" : "bg-[#273142]"}`}>
            <div className="h-full w-full grid grid-cols-[50px_1fr_90px] gap-2">
                <label className="place-self-center w-[30px] h-[30px] cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <div className={`w-[30px] h-[30px] rounded-[6px] flex items-center justify-center ${checked ? "border border-[#B3B3B3] bg-[#4880FF]" :"bg-[#323D50]"}`}>
                        <svg
                            className={`
                                w-5 h-5
                                ${checked ? "opacity-100" : "opacity-0"} text-white
                            `}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            >
                            <path d="M5 13l4 4L19 7" />
                            </svg>
                    </div>
                </label>
                <div className="flex items-center select-none">
                    <p className="font-semibold text-[16px]">{name}</p>
                </div>
                {checked ? (
                    <div className="w-[70px] h-[40px] flex items-center justify-center rounded-[12px] bg-[#6C99FF] border border-[#C8C8C8]/40 cursor-pointer" onClick={() => setDeleted(task)}>
                        <Bin className="w-[20px] h-[20px]"/>
                    </div>
                ) : (
                    <>
                    <div className="flex items-center justify-between" onClick={() => setStar(!star)}>
                        <div className="cursor-pointer">
                            <svg width="30" height="30" viewBox="0 0 18 18" fill={star ? "#FFD56D" : "none"} xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11729 0.916971L11.4967 5.6309L16.0762 6.08459C16.2988 6.10309 16.4903 6.2494 16.5667 6.45931C16.6431 6.66923 16.5904 6.90441 16.4317 7.06165L12.6629 10.7971L14.0602 15.873C14.1186 16.0929 14.0426 16.3266 13.866 16.4701C13.6893 16.6136 13.445 16.6401 13.2417 16.5379L8.59889 14.2389L3.96247 16.535C3.75918 16.6372 3.51484 16.6107 3.33823 16.4673C3.16162 16.3238 3.08559 16.0901 3.14398 15.8701L4.54131 10.7943L0.769596 7.05881C0.610934 6.90156 0.558236 6.66638 0.634625 6.45647C0.711014 6.24655 0.902533 6.10024 1.12515 6.08175L5.70468 5.62806L8.08049 0.916971C8.18012 0.722401 8.3803 0.599998 8.59889 0.599998C8.81748 0.599998 9.01767 0.722401 9.11729 0.916971Z" stroke={star ? "" : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={`place-self-center flex items-center justify-center w-[30px] h-[30px] border rounded-full cursor-pointer ${checked ? "bg-[#4880FF]" : "bg-[#2F3A4E]"}`} onClick={() => setDeleted(task)}><Cancel/></div>
                    </div>
                    
                    </>
                )}
            </div>
        </div>
    )
}