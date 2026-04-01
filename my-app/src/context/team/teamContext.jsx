import { useState, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const TeamContext = createContext();
const rawTeam = [
    {
      name: "Jason Price",
      role: "Admin",
      email: "janick_parisian@yahoo.com",
      avatar: "/images/team/Bitmap (1).png"
    },
    {
      name: "Jukkoe Sisao",
      role: "CEO",
      email: "sibyl_kozey@gmail.com",
      avatar: "/images/team/Bitmap (2).png"
    },
    {
      name: "Harriet King",
      role: "CTO",
      email: "nadia_block@hotmail.com",
      avatar: "/images/team/Bitmap (3).png"
    },
    {
      name: "Lenora Benson",
      role: "Lead",
      email: "feil.wallace@kunde.us",
      avatar: "/images/team/Bitmap (4).png"
    },
    {
      name: "Olivia Reese",
      role: "Strategist",
      email: "kemmer.hattie@cremin.us",
      avatar: "/images/team/Bitmap (5).png"
    },
    {
      name: "Bertha Valdez",
      role: "CEO",
      email: "loraine.koelpin@tromp.io",
      avatar: "/images/team/Bitmap (6).png"
    },
    {
      name: "Harriett Payne",
      role: "Digital Marketer",
      email: "nannie_west@estrella.tv",
      avatar: "/images/team/Bitmap (7).png"
    },
    {
      name: "George Bryant",
      role: "Social Media",
      email: "delmer.kling@gmail.com",
      avatar: "/images/team/Bitmap (8).png"
    },
    {
      name: "Lily French",
      role: "Strategist",
      email: "lucienne.herman@hotmail.com",
      avatar: "/images/team/Bitmap (9).png"
    },
    {
      name: "Howard Adkins",
      role: "CEO",
      email: "wiegand.leonor@herman.us",
      avatar: "/images/team/Bitmap (10).png"
    },
    {
      name: "Earl Bowman",
      role: "Digital Marketer",
      email: "waino_altenwerth@nicolette.tv",
      avatar: "/images/team/Bitmap (11).png"
    },
    {
      name: "Patrick Padilla",
      role: "Social Media",
      email: "octavia.nienow@gleichner.net",
      avatar: "/images/team/Bitmap (12).png"
    }
  ];

export function TeamProvider({ children }) {
    const [team, setTeam] = useState(() => rawTeam.map(item => ({...item, id: uuid()})));
    
    function addMember(name, email, role) {
        setTeam(prev => [...prev, {name: name, email: email, role: role, id: uuid()}])
    }

    return (
        <TeamContext.Provider value={{ team, addMember}}>
            {children}
        </TeamContext.Provider>
    )
}

export function useTeam() {
    return useContext(TeamContext)
}