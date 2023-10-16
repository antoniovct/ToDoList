"use client"

import { uselistContext } from "@/context/ListContext"

const NewNote = () => {
  const {task, setTask, setTodoList} = uselistContext()
  return (
      <form onSubmit={(e) => {
        e.preventDefault()
        setTodoList((oldTodoList: string[]) => [...oldTodoList, task] )
        

      }}>
        <input 
        type="text"
        placeholder="Nova nota..." 
        className="bg-[#2F3237] w-full rounded-lg py-4 pl-4 text-[#898C91] font-Poppins relative bottom-0 mt-10 mb-[4.375rem]" 
        onChange={(event) => {
          setTask(event.target.value)
          
        }}
        onKeyDown={(event: any) => {
          if(event.key === "Enter") {
            event.target.value = ""
          }
        }}/>
      </form>

  )
}

export default NewNote