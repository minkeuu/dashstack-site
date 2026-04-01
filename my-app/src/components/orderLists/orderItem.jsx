export default function OrderItem({ id, name, address, date, type, status }) {
    const STATUS_CONFIG = {
        completed: { label: "Completed", color: "#00B69B" },
        rejected: { label: "Rejected", color: "#EF3826" },
        processing: { label: "Processing", color: "#6226EF" },
        transit: { label: "In Transit", color: "#BA29FF" },
        hold: { label: "On Hold", color: "#FFA756" },
    };

    const { label, color } = STATUS_CONFIG[status] || { label: status, color: "#999" };

    return (
        <div className="h-[80px] w-full grid grid-cols-[120px_1fr_1fr_1fr_1fr_200px] px-10 opacity-90">
            <div className="flex items-center">
                <p>{id}</p>
            </div>
            <div className="flex items-center">
                <p>{name}</p>
            </div>
            <div className="flex items-center"> 
                <p>{address}</p>
            </div>
            <div className="flex items-center">
                <p>{date}</p>
            </div>
            <div className="flex items-center">
                <p>{type}</p>
            </div>
            <div className="flex items-center">
                <div className="flex h-[40px] w-[120px] rounded-[5px] justify-center items-center" style={{backgroundColor: color}}>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    )
}