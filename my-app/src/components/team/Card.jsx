import{ useState } from "react";
export default function Card({name, role, email, avatar}) {
    const [isLoaded, setIsLoaded] = useState(false);

    const hasAvatar = avatar && avatar.trim() !== "" && isLoaded;
    return (
        <div className="flex items-center gap-7 flex-wrap ">
        <div className="w-[262px] h-[289px] bg-[#273142] rounded-[18px] flex flex-col bg-[url('/images/background/teamCard-background.png')]">
        <div className="h-[160px] rounded-[18px_18px_0px_0px] flex items-center justify-center">
              <div className={`w-[110px] h-[110px] rounded-full overflow-hidden ${!isLoaded ? "bg-white" : ""}`}>
                {avatar && (
                    <img
                    src={avatar}
                    alt=""
                    className={`w-full h-full object-cover ${isLoaded ? "block" : "hidden"}`}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(false)}
                    />
                )}
            </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <h1 className="text-[16px] text-white font-bold">{name}</h1>
            <p className="font-normal opacity-80">{role}</p>
        </div>
        <div className="flex-1 flex justify-center mt-2">
            <p className="opacity-80">{email}</p>
        </div>
    </div>
    </div>
    )
}