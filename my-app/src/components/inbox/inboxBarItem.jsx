import { NavLink } from "react-router-dom";

export function InboxBarItem({ to, icon, label, desc, inboxClass,  }) {
  return (
    <NavLink
      to={to}
      end={to === "/inbox"}
      className={({ isActive }) =>
        (isActive ? "relative bg-[#4880FF]/13 rounded-[4px] text-[#4880FF]/60" : "relative") +
        " " +
        inboxClass
      }
    >
      {({ isActive }) => (
        <div className="h-[40px] w-full flex items-center justify-between px-3 relative rounded-[4px]">
          {isActive && (
            <div className="absolute inset-0 bg-[#4880FF]/20 rounded-[4px] z-0"></div>
          )}

          <div className="relative z-10 h-full w-[70px] flex items-center gap-2">
            <div className={isActive ? "text-[#4880FF]" : "text-white"}>
              {icon}
            </div>
            <p className={isActive ? "text-[#4880FF]" : ""}>{label}</p>
          </div>

          <p className={isActive ? "text-[#4880FF]/60" : ""}>{desc}</p>
        </div>
      )}
    </NavLink>
  );
}

