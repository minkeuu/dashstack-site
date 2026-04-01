export default function DealsCard({ prodName, loc, icon, dateTime, piece, amount, status }) {
    const statusColors = {
        delivered: "#00B69B", // зелёный
        pending: "#FCBE2D",    // жёлтый
        rejected: "#FD5454",   // красный
    };

    const Color = statusColors[status];
    return (
     <div className="h-[70px] w-full flex items-center justify-between px-5 border-b-[0.5px] border-gray-300/10">
        <div className="w-[170px] flex items-center justify-around font-nunito text-white/70">
            <img src={icon} alt="" className="rounded-[18px]"/>
            {prodName}
        </div>
        <div className="w-[180px] flex items-center justify-center font-nunito text-white/70">{loc}</div>
        <div className="w-[180px] flex items-center justify-center font-nunito text-white/70">{dateTime}</div>
        <div className="w-[300px] flex items-center justify-around font-nunito text-white/70">
            <p>{piece}</p>
            <p>{amount}</p>
        </div>
        <div className="w-[200px] flex items-center justify-center">
            <div className="w-[100px] h-[27px] font-nunito flex items-center justify-center rounded-[18px]" style={{ backgroundColor: Color }}>{status.charAt(0).toUpperCase() + status.slice(1)}</div>
        </div>
    </div>
    )
}