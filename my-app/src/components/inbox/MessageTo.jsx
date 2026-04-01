import ThreePoints from "../../assets/buttons/three-points.svg?react"
export default function MessageTo({desc, time, pic, file}) {
    file.forEach(f => console.log(f, f instanceof File))

    return (
        <div className="flex items-end gap-5 justify-end">
            <div className="max-w-[60%] bg-[#4880FF] p-4 rounded-[18px_18px_4px_18px]">
                <p className="opacity-95 font-normal">{desc}</p>
                {pic.length > 0 && (
                <div className="flex gap-2 mt-2">
                    {pic.map(img => (
                    <img
                        key={img.name}
                        src={URL.createObjectURL(img)}
                        className="w-16 h-16 object-cover rounded"
                        alt={img.name}
                    />
                    ))}
                </div>
                )}
                {file.length > 0 && (
                    <div className="mt-2 flex flex-col gap-2">
                        {file.map(file => (
                            <a
                                key={file.name}
                                href={URL.createObjectURL(file)}
                                download={file.name}
                                className="bg-[#3A6DFF] px-3 py-2 rounded text-sm flex items-center gap-2 hover:bg-[#335FFF]"
                            >
                                {file.name}
                            </a>
                        ))}
                    </div>
                )}
                <div className="h-[20px] w-full flex justify-end gap-4">
                    <span className="font-normal">{time}</span>
                    <button><ThreePoints></ThreePoints></button>
                </div>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
    )
}