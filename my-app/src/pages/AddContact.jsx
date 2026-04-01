import { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Upload from "../assets/icons/upload-photo.svg?react";
import { useContacts } from "../context/contact/ContactsContext";
export default function AddContact() {
    const { addContact } = useContacts()
    function handleSelect() {

    }
    const navigate = useNavigate();
    const options = [
        "Male",
        "Female"
    ]
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const dateRef = useRef(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [preview, setPreview] = useState(null);
    const [selected, setSelected] = useState("Male");
    const [open, setOpen] = useState(false)

    const fileRef = useRef(null)
    const fullName = `${firstName} ${lastName}`.trim();
    return (
        <div className="h-full w-full px-5 flex flex-col space-y-4">
            <div className="h-[70px] w-full flex items-center justify-between">
                <h1 className="text-white text-[32px] font-nunito font-bold">Add New Contact</h1>
            </div>
            <div className="h-full flex flex-col bg-[#273142] rounded-[14px] py-5">
                <div className="flex items-center justify-center flex-col space-y-2">
                    <div className={`h-[80px] w-[80px] rounded-full flex items-center justify-center ${preview ? "" : "bg-[#ECECEE]"}`}>
                        {preview ? (
                            <img src={preview} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <Upload />
                        )}
                    </div>
                    <p className="text-[16px] font-semibold text-[#4379EE] cursor-pointer select-none" onClick={() => fileRef.current.click()}>{preview ? "Edit Photo" : "Upload Photo"}</p>
                    <input ref={fileRef} type="file" className="hidden" onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setPreview(URL.createObjectURL(file))
                        }
                    }}/>
                </div>
                <div className="h-[400px] flex flex-col py-10 gap-10">
                    <div className="flex items-center justify-center">
                        <div className="w-[800px] flex items-center justify-between">
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">First Name</label>
                                </div>
                                <div className="bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px]">
                                    <input type="text" name="" id="" placeholder="Enter your first name" className="bg-transparent text-white focus:outline-none" ref={firstNameRef} onChange={(e) => setFirstName(e.target.value)} value={firstName} onKeyDown={(e) => { if(e.key === "Enter") emailRef.current.focus()}}/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">Last Name</label>
                                </div>
                                <div className="bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px]">
                                    <input type="text" name="" id="" placeholder="Enter your last name" className="bg-transparent text-white focus:outline-none" ref={lastNameRef} onChange={(e) => setLastName(e.target.value)} value={lastName} onKeyDown={(e) => { if(e.key === "Enter") emailRef.current.focus()}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[800px] flex items-center justify-between">
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">Your Email</label>
                                </div>
                                <div className="bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px]">
                                    <input type="text" name="" id="" placeholder="Enter your email" className="bg-transparent text-white focus:outline-none" ref={emailRef} onChange={(e) => setEmail(e.target.value)} value={email} onKeyDown={(e) => { if(e.key === "Enter") emailRef.current.focus()}}/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">Phone Number</label>
                                </div>
                                <div className="bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px]">
                                    <input type="text" name="" id="" placeholder="Enter your phone number" className="bg-transparent text-white focus:outline-none" ref={phoneRef} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} onKeyDown={(e) => { if(e.key === "Enter") emailRef.current.focus()}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[800px] flex items-center justify-between">
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">Date of Birth</label>
                                </div>
                                <div className="bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px]">
                                    <input type="text" name="" id="" placeholder="Enter your birthday" className="bg-transparent text-white focus:outline-none" ref={dateRef} onChange={(e) => setDate(e.target.value)} value={date} onKeyDown={(e) => { if(e.key === "Enter") emailRef.current.focus()}}/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <label className="w-[100px] text-[14px] font-semibold">Gender</label>
                                </div>
                                <div className="relative bg-[#323D4E] h-[52px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10 w-[360px] flex items-center justify-between" onClick={() => setOpen(!open)}>
                                    <span className="text-[#B6B6B6]">{selected}</span>
                                    <svg
                                        className={`w-4 h-4 transform transition-transform text-[#B6B6B6] ${
                                        open ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    {open && (
                                        <div className="absolute top-full left-0 mt-1 z-50 bg-[#323D4E] rounded-[5px] border border-[#D8D8D8]/10 w-full shadow-lg overflow-hidden">
                                            {options.map((option) => (
                                                <li key={option} className="p-2 hover:bg-[#3A4658] cursor-pointer" onClick={() => setSelected(option)}>
                                                    {option}
                                                </li>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[200px] flex items-center justify-center">
                    <button className="w-[274px] h-[56px] rounded-[12px] bg-[#4880FF]" onClick={() => (addContact(fullName, email, preview) & navigate(-1))}>Add now</button>
                </div>
            </div>
        </div>

    )
}