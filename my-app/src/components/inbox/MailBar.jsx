import { useState } from "react"
import BinBtn from "../../assets/buttons/bin.svg?react"
import ArchiveBtn from "../../assets/buttons/archive.svg?react"
import InfoBtn from "../../assets/buttons/info.svg?react"
import SearchBar from "../../components/navbar/SearchBar"
import { InboxMailItem } from "../../components/inbox/InboxMailItem"
export default function MailBar({ mails, onOpenMail, labels, onDelete, toggleChecked, checked, setChecked}) {
    const activeStatuses = Object.keys(labels)
    .filter((s) => labels[s])
    .map((s) => s.toLowerCase());

    const filteredMails = activeStatuses.length === 0
    ? mails
    : mails.filter(
        (mail) =>
          mail.status &&
          activeStatuses.includes(mail.status.toLowerCase()) 
      );
    
    const [message, setMessage] = useState("");
    console.log(message)
    return (
        <div className="h-full w-full bg-[#273142] rounded-[14px] flex flex-col border border-[#313D4F]">
            <div className="h-[100px] w-full flex items-center justify-between px-8">
                <SearchBar placeholder="Search mail" className="h-[38px] w-[300px]" msg={message} setMsg={setMessage} ></SearchBar>
                <div className="h-[50px] w-[150px] bg-[#323D4E] rounded-[12px] flex items-center flex divide-x divide-[#CFCFCF]/[0.11]">
                <button className="h-full w-[50px] flex items-center justify-center">
                    <ArchiveBtn></ArchiveBtn>
                </button>
                <button className="h-full w-[50px] flex items-center justify-center">
                    <InfoBtn></InfoBtn>
                </button>
                <button className="h-full w-[50px] flex items-center justify-center" onClick={() => onDelete(checked)}>
                    <BinBtn></BinBtn>
                </button>
                </div>
            </div>
            <div className="flex-1 min-h-0 w-full divide-y divide-[#C6C6C6]/20 overflow-auto">
                {filteredMails.map((item) => (<InboxMailItem  key={item.id} {...item} onOpenMail={onOpenMail} checked={checked.includes(item.id)} toggleChecked={toggleChecked} setChecked={setChecked}/>))}
            </div>
        </div>
    )
}