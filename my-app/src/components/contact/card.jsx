import Message from "../../assets/icons/message-icon.svg?react";
export default function Card({name, email, image}) {
    return (
        <div className="w-[350px] h-[400px] bg-[#273142] rounded-[18px] flex flex-col ">
            <div className="h-[260px] rounded-[18px_18px_0px_0px] overflow-hidden">
                {image && (
                    <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover block"
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1">
                <h1 className="text-[16px] font-bold">{name}</h1>
                <p className="text-[14px] font-regular opacity-90">{email}</p>
            </div>
            <div className="flex-1 flex items-center justify-center ">
                <button className="w-[130px] h-[40px] border border-[#EBEBEB] rounded-[6px] text-[14px] font-bold flex items-center justify-center gap-1">
                <Message className="w-6 h-6 translate-y-[5px]" />
                Message
                </button>
            </div>
        </div>
    )
}