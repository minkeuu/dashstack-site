import BinBtn from "../../assets/buttons/bin.svg?react"
import ArchiveBtn from "../../assets/buttons/archive.svg?react"
import InfoBtn from "../../assets/buttons/info.svg?react"
import ArrowLeft from "../../assets/buttons/arrowLeftBtn.svg?react"
import StarBright from "../../assets/buttons/star-bright.svg?react"
import Printer from "../../assets/buttons/printer.svg?react"
import Bin from "../../assets/buttons/bin-starred.svg?react"
import ThreePoints from "../../assets/buttons/three-points.svg?react"
import Microphone from "../../assets/buttons/microphone.svg?react"
import Attachments from "../../assets/buttons/attachments.svg?react"
import Pictures from "../../assets/buttons/pictures.svg?react"
import SendBtn from "../../assets/buttons/send-btn.svg?react"
import MessageFrom from "./MessageFrom"
import MessageTo from "./MessageTo"
import { useState, useRef } from "react"
import { useStar } from "../../context/inbox/InboxContent"
export default function OpenMail({mail, onBack, onDelete, checked}) {
    const fileRef = useRef(null);
    const pngRef = useRef(null);
    const btnColor = {
        primary: "#00B69B",
        work: "#FD9A56",
        friends: "#7D3A89",
        social: "#3D369F"
    }


    const label = btnColor[mail.status]
    const [message, setMessage] = useState("")
    const [newMessages, setNewMessages] = useState([])
    const [attachments, setAttachments] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [previewModal, setPreviewModal] = useState(false);
    const { star, toggleStar } = useStar()
    const isStar = star.some((s) => s.id === mail.id)
    function handleSubmit(e) {
        if (e) e.preventDefault();    // чтобы страница не перезагружалась
        if (!message.trim() && attachments.length === 0 && pictures.length === 0) return // не отправлять пустое

        console.log("Отправка:", message)
        const messages = {
            id: Date.now(),
            from: "me",
            text: message, 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            files: attachments,
            pictures: pictures
        }
        console.log(message)
        setNewMessages([...newMessages, messages])

        setMessage("")
        setAttachments([])
        setPictures([])
        fileRef.current.value = null;
        pngRef.current.value = null;
    }
    const hasStatus = Boolean(mail.status);
    return (
        <div className="h-full w-full bg-[#273142] rounded-[14px] flex flex-col border border-[#313D4F]">
            <div className="h-[70px] w-full flex items-center justify-between px-7 border-b border-[#E0E0E0]/[0.11]">
                    <div className="h-[50px] w-[400px] items-center gap-5 flex">
                        <div className="h-[25px] w-[25px] bg-[#4A566B] rounded-[5px] flex items-center justify-center cursor-pointer" onClick={onBack}>
                            <ArrowLeft/>
                        </div>
                        <p className="font-bold text-[20px] whitespace-nowrap">
                            {mail.name}
                        </p>
                        <div className="h-[30px] px-3 w-[70px] flex items-center justify-center rounded" style={{ backgroundColor: label}}>
                            <p>{hasStatus && mail.status.charAt(0).toUpperCase() + mail.status.slice(1)}</p>
                        </div>
                    </div>
                <div className="h-[40px] w-[150px] bg-[#323D4E] rounded-[12px] flex items-center flex divide-x divide-[#CFCFCF]/[0.11]">
                <button className="h-full w-[50px] flex items-center justify-center">
                    <Printer></Printer>
                </button>
                <button className="h-full w-[50px] flex items-center justify-center" onClick={() => toggleStar(mail)}>
                    <StarBright className={`${isStar ? "fill-[#FFD56D] text-[#FFD56D]" : ""}`}></StarBright>
                </button>
                <button className="h-full w-[50px] flex items-center justify-center" onClick={() => {onDelete(mail.id), onBack()}}>
                    <Bin></Bin>
                </button>
                </div>
                
            </div>
            <div className="flex-1 w-full p-7 flex flex-col gap-10 overflow-auto">
                {newMessages.map((msg) => (<MessageTo key={msg.id} pic={msg.pictures} file={msg.files} desc={msg.text} />))}
                {previewModal && ( 
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-[#273142] rounded-xl p-5 w-[500px] max-w-full">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white font-bold">Preview</h2>
                        <button
                          className="text-white text-xl font-bold"
                          onClick={() => setPreviewModal(false)}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-3 max-h-[400px] overflow-auto">
                        {attachments.map((file) => (
                          <div key={file.name} className="bg-[#1E1E1E] p-2 rounded flex items-center gap-2">
                            <p className="text-white text-sm truncate max-w-[100px]">{file.name}</p>
                            <button
                              className="text-gray-400 hover:text-white"
                              onClick={() =>
                                setAttachments((prev) => prev.filter((f) => f.name !== file.name))
                              }
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                        {pictures.map((img) => (
                          <div key={img.name} className="relative">
                            <img
                              src={URL.createObjectURL(img)}
                              alt={img.name}
                              className="w-24 h-24 object-cover rounded"
                            />
                            <button
                              className="absolute -top-2 -right-2 text-white bg-black/60 rounded-full w-5 h-5 flex items-center justify-center"
                              onClick={() =>
                                setPictures((prev) => prev.filter((p) => p.name !== img.name))
                              }
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-end gap-2">
                        <button
                          className="px-4 py-2 bg-gray-600 rounded text-white"
                          onClick={() => setPreviewModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-2 bg-blue-600 rounded text-white"
                          onClick={() => {
                            handleSubmit(); // Отправка сообщений с файлами
                            setPreviewModal(false);
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}

            </div>
            <div className="h-[75px] w-full grid grid-cols-[50px_1fr_50px_50px_120px] border-t border-[#E0E0E0]/[0.11] py-5 px-3">
                <div className="flex justify-center items-center">
                    <Microphone className="w-[13px] h-[24px] cursor-pointer" />
                </div>

                {/* Вся оставшаяся часть — одна форма */}
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full items-center gap-2 col-span-4"
                >
                    <input
                        type="text"
                        placeholder="Write message..."
                        className="bg-transparent text-white focus:outline-none w-full"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className="w-[200px] flex items-center gap-7 px-3">
                        <div onClick={() => fileRef.current.click()}>
                            <Attachments className="cursor-pointer" />
                            <input
                                ref={fileRef}
                                type="file"
                                className="hidden"
                                onChange={(e) => {
                                  const files = Array.from(e.target.files)
                                  setAttachments(prev => [...prev, ...files])
                                  setPreviewModal(true)
                                }}

                                multiple
                            />
                        </div>

                        <div onClick={() => pngRef.current.click()}>
                            <Pictures className="cursor-pointer" />
                            <input
                                ref={pngRef}
                                type="file"
                                className="hidden"
                                onChange={(e) => {setPictures(Array.from(e.target.files)), setPreviewModal(true);}}
                                multiple
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[100px] h-[35px] bg-[#4880FF] flex justify-center items-center rounded-[6px] gap-2 select-none"
                            >
                            <p>Send</p>
                            <SendBtn />
                        </button>
                    </div>
                </form>
                </div>
        </div>
    )
}

