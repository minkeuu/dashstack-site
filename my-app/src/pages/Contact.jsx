import React, { useState, useRef, useEffect, useContext } from "react";
import Message from "../assets/icons/message-icon.svg?react";
import { v4 as uuid } from "uuid";
import Card from "../components/contact/card";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/contact/ContactsContext";
export default function Contact() {
  const navigate = useNavigate();
  const { contact } = useContacts()
  
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setChecked(false)
    };

    document.addEventListener("keydown", handleEsc)
    return document.removeEventListener("keydown", handleEsc)
  }, [checked])
  return (
    <>
      <div className="h-full w-full px-4 flex flex-col space-y-4">
        <div className="h-[70px] w-full flex items-center justify-between">
          <h1 className="text-white text-[32px] font-nunito font-bold">Contact</h1>
          <button className="bg-[#4379EE] rounded-[10px] w-[150px] h-[50px] select-none" onClick={() => navigate("/contact/new")}>Add New Contact</button>
        </div>
        <div className="flex items-center gap-7 flex-wrap">
          {contact.map((i) => <Card key={i.id} email={i.email} name={i.name} image={i.image}/>)}
        </div>
      </div>
    </>
  );
}
