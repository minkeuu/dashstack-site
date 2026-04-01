import InboxIcon from "../../assets/navigation/inbox.svg?react"
import StarredIcon from "../../assets/navigation/starred.svg?react";
import SentIcon from "../../assets/navigation/sent.svg?react";
import DraftIcon from "../../assets/navigation/draft.svg?react";
import SpamIcon from "../../assets/navigation/spam.svg?react"
import ImportantIcon from "../../assets/navigation/important.svg?react"
import BinIcon from "../../assets/navigation/bin.svg?react";

import { InboxBarItem } from "../../components/inbox/inboxBarItem";
import { CheckBoxItem } from "../../components/inbox/CheckBoxItem";

export default function Sidebar({ labels, setLabels}) {
    
    const inboxClass = "h-[40px] w-full flex items-center justify-between px-3 relative rounded-[4px]"
    
    const inboxItems = [
        { to: "/inbox", icon: <InboxIcon/>, label: "Inbox", desc: "1253" },
        { to: "/inbox/starred", icon: <StarredIcon />, label: "Starred", desc: "245" },
        { to: "/inbox/sent", icon: <SentIcon/>, label: "Sent", desc: "24,532" },
        { to: "/inbox/draft", icon: <DraftIcon/>, label: "Draft", desc: "9" },
        { to: "/inbox/spam", icon: <SpamIcon/>, label: "Spam", desc: "14" },
        { to: "/inbox/important", icon: <ImportantIcon/>, label: "Important", desc: "18" },
        { to: "/inbox/bin", icon: <BinIcon/>, label: "Bin", desc: "5" },
    ]

    const checkBoxItems = [
        { label: "Primary", borderColor: "#00B69B", svgColor: "blue-500"},
        { label: "Social", borderColor: "#3D369F", svgColor: "blue-500"},
        { label: "Work", borderColor: "#F2AC34", svgColor: "blue-500"},
        { label: "Friends", borderColor: "#D456FD", svgColor: "blue-500"},
    ]

    const activeStatuses = Object.keys(labels)
    .filter((s) => labels[s])
    .map((s) => s.toLowerCase());


    return (
    <div className="h-full w-[350px] bg-[#273142] rounded-[14px] flex items-center flex-col space-y-4 pt-5 border border-[#313D4F]">
        <button className="w-[230px] h-[40px] bg-[#4880FF]/90 rounded-[9px] flex items-center justify-center">
            + Compose
        </button>
        <div className="w-[230px] h-[330px] flex flex-col space-y-4">
            <div className="h-[20px] w-full">
            <h1 className="font-bold text-[16px]">My Email</h1>
            </div>
            <div className="flex-1 w-full flex flex-col gap-1">
            {inboxItems.map((item) => (<InboxBarItem key={item.to} {...item} className={inboxClass}/>))}
            </div>
        </div>
        <div className="w-[230px] h-[320px]">
            <div className="w-[230px] h-[250px] flex flex-col space-y-4">
            <div className="h-[20px] w-full">
            <h1 className="font-bold text-[16px]">Label</h1>
            </div>
            <div className="flex-1 w-full flex flex-col gap-1">
            {checkBoxItems.map((item) => (<CheckBoxItem key={item.label} {...item} checked={labels[item.label]} onToggle={(checked) => setLabels((prev) => ({ ...prev, [item.label]: checked })) }/>))}
            <button className="h-[50px] w-full text-white/80 flex items-center pt-1 px-4 gap-3">
                <p>+</p>
                <p>Create New Label</p>
            </button>
            </div>
        </div>
        </div>
    </div>
    )
}