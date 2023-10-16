"use client"
import { PropsList } from "@/TypesProject/typesList"
import { uselistContext } from "@/context/ListContext"
import { useRef } from "react"


const List = ({textList}: PropsList) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {setCount,ocultar} = uselistContext()
  
  return (
    <div 
    className={`
      ${ocultar === "Mostrar Concluídos" && inputRef.current?.checked ? "hidden" : "grid" } 
      font-Poppins grid-cols-[2rem_minmax(18.75rem,_1fr)] 
      mt-10 font-light
      
      `}>
        <input 
        type="checkbox" 
        id={textList} 
        className={`
        appearance-none w-5 h-5 outline outline-[#B4B4B4] 
        outline-1 rounded cursor-pointer self-center 
        checked:bg-[#29ABE2] checked:bg-[url('/checkbox.svg')] checked:outline-none
        bg-no-repeat  bg-center bg-[length:0.8rem_0.8rem]
        `}
        ref={inputRef}
        onClick={() => {
          if(inputRef.current?.checked) {
            setCount((current:number) => current + 1)
          } else {
            setCount((current:number) => current -1)
          }
        }}/>
        <label 
        htmlFor={textList}
        className="text-white cursor-pointer font-light break-normal  ">
            {textList}
        </label>
    </div>
  )
}

export default List