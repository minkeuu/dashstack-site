import { useState } from "react";

export function CheckBoxItem({ label, borderColor, svgColor, onToggle, checked }) {

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none h-[40px] px-3">
      {/* Скрытый нативный чекбокс */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onToggle(e.target.checked) }
        className="peer hidden"
      />

      <div
        style={{ "--border" : borderColor, "--svg" : svgColor}}
        className={`w-[20px] h-[20px] rounded-[3px] border-2
        border-[var(--border)]
        flex items-center justify-center`} 
      >
        <svg
          className={`
            w-3 h-3 text-[var(--svg)]
            ${checked ? "opacity-100" : "opacity-0"}
          `}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <span>{label}</span>
    </label>
  );
}
