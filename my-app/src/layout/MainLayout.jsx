import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-[#1B2431] overflow-hidden">
      
      <Sidebar />

      <div className="flex flex-col flex-1 min-h-0">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
