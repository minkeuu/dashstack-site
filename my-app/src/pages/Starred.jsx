import Sidebar from "../components/inbox/Sidebar"
import MailBar from "../components/inbox/MailBar"
import BottomBar from "../components/inbox/BottomBar"
import { useStar } from "../context/inbox/InboxContent"
import { InboxMailItem } from "../components/inbox/InboxMailItem"
import SearchBar from "../components/navbar/SearchBar"
import BinBtn from "../assets/buttons/bin.svg?react"
import ArchiveBtn from "../assets/buttons/archive.svg?react"
import InfoBtn from "../assets/buttons/info.svg?react"
import { useLabels } from "../context/inbox/LablesContext"
export function Starred() {
    const { star } = useStar()
    const {labels, setLabels} = useLabels()
     const activeStatuses = Object.keys(labels)
    .filter((s) => labels[s])
    .map((s) => s.toLowerCase());

    const filteredMails = activeStatuses.length === 0
    ? star
    : star.filter(
        (mail) =>
          mail.status &&
          activeStatuses.includes(mail.status.toLowerCase())
      );
    return (
        <div className="w-full h-full px-4">
            <div className="h-[70px] w-full flex items-center">
                <h1 className="text-white text-[32px] font-nunito font-bold">Inbox</h1>
            </div>
            <div className="w-full h-[750px] flex flex-col">
                <div className="h-[720px] w-full flex items-center gap-8">
                    <Sidebar labels={labels} setLabels={setLabels}></Sidebar>
                    
                    <div className="h-full w-full bg-[#273142] rounded-[14px] flex flex-col border border-[#313D4F]">
                        <div className="h-[100px] w-full flex items-center justify-between px-8">
                            <SearchBar placeholder="Search mail" className="h-[38px] w-[300px]"></SearchBar>
                            <div className="h-[50px] w-[150px] bg-[#323D4E] rounded-[12px] flex items-center flex divide-x divide-[#CFCFCF]/[0.11]">
                            <button className="h-full w-[50px] flex items-center justify-center">
                                <ArchiveBtn></ArchiveBtn>
                            </button>
                            <button className="h-full w-[50px] flex items-center justify-center">
                                <InfoBtn></InfoBtn>
                            </button>
                            <button className="h-full w-[50px] flex items-center justify-center">
                                <BinBtn></BinBtn>
                            </button>
                            </div>
                        </div>
                        <div className="flex-1 min-h-0 w-full divide-y divide-[#C6C6C6]/20">
                            {filteredMails.map((star) => (
                                <InboxMailItem key={star.id} {...star}/>
                            ))}
                        </div>
                    </div>
                </div>
                    <BottomBar></BottomBar>
            </div>
        </div>
    )
}