
import BottomBar from "../components/inbox/BottomBar";
import Sidebar from "../components/inbox/Sidebar";
import MailBar from "../components/inbox/MailBar";
import { useState } from "react";
import OpenMail from "../components/inbox/OpenMail";
import { useLabels } from "../context/inbox/LablesContext";
export default function Inbox() {
  const mailBoxItems = [
    { id: "1", name: "Jullu Jalal", status: "primary", mailDesc: "Welcome to our Bachelor of Commerce program. Here’s what you need to know.", time: "8:38 AM" },
    { id: "2", name: "Minerva Barnett", status: "work", mailDesc: "Your weekly work summary is ready for review.", time: "9:12 AM" },
    { id: "3", name: "Peter Lewis", status: "friends", mailDesc: "Hey! Are we still meeting this weekend?", time: "Yesterday" },
    { id: "4", name: "Anthony Briggs", mailDesc: "Please find attached the documents you requested.", time: "7:45 AM" },
    { id: "5", name: "Clifford Morgan", status: "social", mailDesc: "You have new connection requests waiting for you.", time: "Mon" },
    { id: "6", name: "Cecilia Webster", status: "friends", mailDesc: "Thanks for checking in! Let’s catch up soon.", time: "Sun" },
    { id: "7", name: "Harvey Manning", mailDesc: "Your password was successfully changed.", time: "6:10 AM" },
    { id: "8", name: "Willie Blake", status: "primary", mailDesc: "Important update regarding your account settings.", time: "5:54 AM" },
    { id: "9", name: "Minerva Barnett", status: "work", mailDesc: "Reminder: project deadline is approaching.", time: "Thu" },
    { id: "10", name: "Fanny Weaver", mailDesc: "Your subscription has been renewed successfully.", time: "Wed" },
    { id: "11", name: "Olga Hogan", status: "social", mailDesc: "Someone mentioned you in a comment.", time: "Tue" },
    { id: "12", name: "Billy Holawer", status: "work", mailDesc: "Invoice #4821 is now available for download.", time: "Mon" },
  ];

  const [selectedMail, setSelectedMail] = useState(null)
  const { labels, setLabels } = useLabels()
  const [mails, setMails] = useState(mailBoxItems);
  function handleOpenMail(mail) {
    setSelectedMail(mail)
  }
  function handleDelete(id) {
    setMails((prev) => prev.filter(mail => !id.includes(mail.id)))
  }

  
  const [checked, setChecked] = useState([]);

  const toggleChecked = (id) => {
      setChecked((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
  }

  return (
    <div className="h-full w-full px-4 ">
      <div className="h-[70px] w-full flex items-center">
        <h1 className="text-white text-[32px] font-nunito font-bold">Inbox</h1>
      </div>
      <div className="h-[760px] w-full flex flex-col">
        <div className="h-[720px] w-full flex items-center gap-8">
          
          <Sidebar labels={labels} setLabels={setLabels}></Sidebar>
          {selectedMail ? ( <OpenMail checked={checked} mail={selectedMail} onDelete={handleDelete} onBack={() => setSelectedMail(null)} /> ) : (<MailBar labels={labels} mails={mails} onDelete={handleDelete} onOpenMail={handleOpenMail} checked={checked} setChecked={setChecked} toggleChecked={toggleChecked}/> )}



        </div>
        {selectedMail ? (null) : (<BottomBar></BottomBar>) }
      </div>
    </div>
  );
}
