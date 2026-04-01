import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "../components/team/Card";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../context/team/teamContext";
export default function Team() {
  const { team } = useTeam()
  const navigate = useNavigate()
  return (
    <>
      <div className="h-full w-full px-4 flex flex-col space-y-4" >
        <div className="h-[70px] w-full flex items-center justify-between">
          <h1 className="text-white text-[32px] font-nunito font-bold">Team</h1>
          <button className="bg-[#4379EE] rounded-[10px] w-[150px] h-[50px] select-none" onClick={() => navigate("/team/new")}>Add New Member</button>
        </div>
        <div className="flex items-center gap-7 flex-wrap">
          {team.map((i) => <Card key={i.id} name={i.name} role={i.role} email={i.email} avatar={i.avatar}/>)}
        </div>
      </div>
        </>
  );
}
