"use client"
import { createContext, useContext, useState } from "react";

const ListContext = createContext<null | any >(null)
ListContext.displayName = "List"

export default function ListContextProvider({children}: {children:React.ReactNode}) {
    const [task, setTask] = useState("")
    const [todoList, setTodoList] = useState([])
    const [count, setCount] = useState(0)
    const [ocultar, setOcultar] = useState("Ocultar Concluídos")
    return (
        <ListContext.Provider value={{task, setTask, todoList, setTodoList, count, setCount, ocultar, setOcultar }}>
            {children}
        </ListContext.Provider>
    )
}

export function uselistContext() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {task, setTask, todoList, setTodoList, count, setCount, ocultar, setOcultar} = useContext(ListContext)

    return {
        task, setTask, todoList, setTodoList, count, setCount, ocultar, setOcultar
    }
    
}