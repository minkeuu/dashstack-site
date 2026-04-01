import React from "react";
import TodoCard from "../components/todo/todo-card";
import { v4 as uuid } from "uuid";
import { useState, useEffect, useRef } from "react";
export default function ToDo() {
  const taskRow = [
    {name: "Meeting with CEO"},
    {name: "Pick up kids from school"},
    {name: "Shopping with Brother"},
    {name: "Review with HR"},
    {name: "Going to Dia’s School"},
    {name: "Check design files"},
    {name: "Update File"}
  ]

  const [task, setTask] = useState(() =>
    taskRow.map(item => ({ ...item, id: uuid() }))
  );
  function taskDelete(id) {
    setTask((prev) => prev.filter(task => task.id !== id))
  }
  function addTask() {
    setTask(prev => [...prev, {name: message, id: uuid()}])
    setMessage("")
    setChecked(false)
  }
  const [deleted, setDeleted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  const inputRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setChecked(false);
      }
    }

    function handleEscape(e) {
      if (e.key === "Escape") setChecked(false)
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    if (checked) {
      inputRef.current?.focus();
    }
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleEscape)
    } 

    
  }, [checked]);
  return (
    <>
    {checked && (
      <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center" onClick={(e) => { if(e.target === e.currentTarget) { setChecked(false) } }}>
        <div className="bg-[#273142] p-5 w-[500px] rounded-[10px] space-y-3" ref={modalRef}>
          <div className="h-[40px] w-full flex items-center justify-between">
            <p className="">New Task</p>
            <button className="text-gray-200 text-xl font-bold" onClick={() => setChecked(false)}> ✕ </button>
          </div>
          <div className="bg-[#323D4E] h-[40px] rounded-[5px] flex items-center px-3 border border-[#D8D8D8]/10">
            <input type="text" name="" id="" placeholder="Type here..." className="bg-transparent text-white focus:outline-none w-full" ref={inputRef} onChange={(e) => setMessage(e.target.value)} value={message} onKeyDown={(e) => { if(e.key === "Enter") addTask()}}/>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button className="h-[40px] w-[100px] bg-[#323D50] rounded-[5px]">Cancel</button>
            <button className="h-[40px] w-[100px] bg-[#4379EE] rounded-[5px]" onClick={addTask}>Confirm</button>
          </div>
        </div>
      </div>
    )}
    <div className="h-full w-full px-4 flex flex-col space-y-7">
      <div className="h-[70px] w-full flex items-center justify-between">
        <h1 className="text-white text-[32px] font-nunito font-bold">To-Do list</h1>
        <button className="bg-[#4379EE] rounded-[10px] w-[150px] h-[50px] select-none" onClick={() => setChecked(!checked)}>Add New Task</button>
      </div>
      <div className="w-full flex-1 space-y-5">
        {task.map((i) => <TodoCard key={i.id} name={i.name} deleted={deleted} setDeleted={taskDelete} task={i.id}/>)}
      </div>
    </div>
    </>
    
  );
}
