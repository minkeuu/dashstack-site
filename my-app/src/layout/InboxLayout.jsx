import { Outlet } from "react-router-dom";

export default function InboxLayout() {
  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <Outlet />
    </div>
  );
}
