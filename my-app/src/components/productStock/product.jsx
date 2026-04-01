import Bin from "../../assets/buttons/bin.svg?react";
import Edit from "../../assets/buttons/edit.svg?react";
export default function Product({img, prodName, category, price, piece, onDelete }) {
    return (
        <div className="h-[90px] w-full px-10 grid grid-cols-[170px_270px_270px_190px_180px_250px_100px]">
            <div className="flex items-center">
                <img src={img} alt="" className="rounded-[10px]" />
            </div>
            <div className="flex items-center">
                <p className="text-[14px] font-semibold">{prodName}</p>
            </div>
            <div className="flex items-center">
                <p className="text-[14px] font-semibold opacity-90">{category}</p>
            </div>
            <div className="flex items-center">
                <p className="text-[14px] font-semibold opacity-90">{price}</p>
            </div>
            <div className="flex items-center">
                <p className="text-[14px] font-semibold opacity-90">{piece}</p>
            </div>
                <div className="flex gap-5 items-center">
                <div className="w-5 h-5 bg-black rounded-full"></div>
                <div className="w-5 h-5 bg-[#9F9F9F] rounded-full"></div>
                <div className="w-5 h-5 bg-[#E98F8F] rounded-full"></div>
            </div>
            <div className="flex items-center">
                <div className="h-[40px] w-[100px] bg-[#323D4E] flex items-center rounded-[8px] divide-x divide-[#979797]/70">
                    <div className="h-full w-1/2 flex items-center justify-center">
                    <Edit className="h-5 w-5 cursor-pointer"></Edit>
                    </div>
                    <div className="h-full w-1/2 flex items-center justify-center">
                    <Bin className="text-red-600 w-5 h-5 cursor-pointer" onClick={onDelete}></Bin>
                    </div>
                </div>
            </div>
        </div>
    )
}