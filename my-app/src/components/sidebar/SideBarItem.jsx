// SidebarItem.jsx
import { NavLink } from "react-router-dom";

export function SideBarItem({ to, label, navClass }) {
  return (
    <div className="h-[50px] w-full flex items-center justify-center relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          (isActive ? "bg-[#4880FF] " : "") + navClass
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <div className="absolute left-0 top-0 h-full w-[5px] bg-[#4880FF] rounded-r-xl"></div>
            )}
            <span className="px-4">{label}</span>
          </>
        )}
      </NavLink>
    </div>
  );
}
