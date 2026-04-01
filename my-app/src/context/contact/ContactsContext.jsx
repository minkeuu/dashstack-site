import { useState, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const ContactsContext = createContext();
const rowContacts = [
    {name:"Jason Price", email: "kuhlman.jermey@yahoo.com", image: "/images/contacts/Image.png"},
    {name: "Duane Dean", email: "rusty.botsford@wilfrid.io", image: "/images/contacts/Image (1).png"},
    {name: "Jonathan Barker", email: "cora_haley@quinn.biz", image: "/images/contacts/Image (2).png"},
    {name: "Rosie Glover", email: "lockman.marques@hotmail.com", image: "/images/contacts/Bitmap.png"},
    {name: "Patrick Greer", email: "pearlie.eichmann@trevion.net", image: "/images/contacts/Image (3).png"},
    {name: "Darrell Ortega", email: "chaya.shields@ferry.info", image: "/images/contacts/Image (4).png"}
  ];
export function ContactsProvider({ children }) {
    const [contact, setContact] = useState(() => rowContacts.map(item => ({...item, id: uuid()})))

    function addContact(name, email, image) {
        setContact(prev => [...prev, {name: name, email: email, image: image, id: uuid()}])
    }

    return (
    <ContactsContext.Provider value={{ contact, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
export function useContacts() {
  return useContext(ContactsContext);
}