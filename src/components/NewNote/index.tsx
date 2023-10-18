"use client"

import { uselistContext } from "@/context/ListContext"
import {useEffect, useRef} from "react"
const NewNote = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {todoList, setTodoList, task, setTask} = uselistContext()

  useEffect(() => {
    const todoLocalStorage = JSON.parse(localStorage.getItem("tarefas")) ?? [] 
     setTodoList(todoLocalStorage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    localStorage.setItem("tarefas",JSON.stringify(todoList))

  },[todoList])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setTodoList((current:Array<string>) => [...current, task])
      console.log(todoList)
      }}>
        <input 
        type="text"
        placeholder="Nova nota..." 
        className="bg-[#2F3237] w-full rounded-lg py-4 pl-4 text-[#898C91] font-Poppins relative bottom-0 mt-10 mb-[4.375rem]"
        ref={inputRef}
        onChange={(event) => setTask(event.target.value)} 

        onKeyDown={(event: any) => {
          if(event.key === "Enter") {
  
            event.target.value = ""
          }
        }}/>
      </form>

  )
}

export default NewNote