export default function Card({title, desc, price, activeText, active = 0}) {
    const description = [
        "Free Setup",
        "Bandwidth Limit 10 GB",
        "20 User Connection",
        "Analytics Report",
        "Public API Access",
        "Plugins Integration",
        "Custom Content Management",
    ];

    return (
        <div className="h-[730px] w-[420px] rounded-[24px] bg-[#273142] bg-[url('/images/background/pattern-1.png')] grid grid-rows-[200px_300px_230px]">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-[22px] font-bold">{title}</h1>
                <p className="text-[16px] opacity-80">{desc}</p>
                <h2 className="text-[46px] text-[#4880FF] font-extrabold">{price}</h2>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-[18px] font-semibold">
                {description.map((item, index) => (
                    <p key={index} className={`text-[16px] ${activeText <= index ? "opacity-40" : "text-white"}`}>
                        {item}
                    </p>
                ))}
            </div>
            <div className="flex flex-col gap-2 items-center justify-center gap-5">
                <button className="w-[180px] h-[60px] rounded-[30px] text-[#4880FF] border-2 border-[#4880FF] hover:bg-[#4379EE] hover:text-white">Get Started</button>
                <p className="text-[16px] font-bold underline">Start Your 30 Day Free Trial</p>
            </div>
        </div>
    )
}