import ThreePoints from "../../assets/buttons/three-points.svg?react"
export default function MessageFrom({desc, time}) {
    return (
        <div className="flex items-end gap-5">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="max-w-[60%] bg-[#323D4E] p-4 rounded-[18px_18px_18px_4px]">
                <p className="opacity-95 font-normal">{desc}</p>
                <div className="h-[20px] w-full flex justify-end gap-4">
                    <span className="font-normal">{time}</span>
                    <button><ThreePoints></ThreePoints></button>
                </div>
            </div>
        </div>
    )
}