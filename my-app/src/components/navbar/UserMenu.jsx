import { IoIosArrowDown } from "react-icons/io";

export default function UserMenu() {
  return (
    <div className="w-[300px] h-full flex items-center gap-7 justify-center px-6">
      <img
        className="h-[50px] w-[50px] rounded-full bg-white"
        src="./src/assets/avatarUser.svg"
        alt="User"
      />

      <div className="flex flex-col">
        <p className="font-semibold text-white">Moni Roy</p>
        <p className="text-sm text-gray-400">Admin</p>
      </div>

      <div className="h-[20px] w-[20px] flex items-center justify-center rounded-full border-gray-500 border-[0.2px]">
        <IoIosArrowDown className="text-white" size={10} />
      </div>
    </div>
  );
}
