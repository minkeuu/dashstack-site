
import ArrowLeft from "../../assets/buttons/arrowLeftBtn.svg?react";
import ArrowRight from "../../assets/buttons/arrowRightBtn.svg?react"

export default function BottomBar() {
    return (
         <div className="h-[100px] w-full flex items-center">
        
        <div className="h-[45px] w-full flex items-end justify-center opacity-60"><p>Showing 1-12 of 1,253</p></div>

        <div className="h-full w-[150px] flex items-end justify-center">
            <div className="h-[30px] w-[90px] bg-[#323D4E] rounded-[8px] border border-[#CFCFCF]/[0.11] flex items-center">
            <div className="h-full w-[45px] border-r border-[#979797]/[0.11] flex items-center justify-center"><ArrowLeft className="w-3 h-3 text-white"></ArrowLeft></div>
            <div className="h-full w-[45px] flex items-center justify-center"><ArrowRight className="w-3 h-3 text-white"></ArrowRight></div>  
            </div>
        </div>
        </div>
    )
}