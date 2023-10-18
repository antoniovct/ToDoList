"use client"
import { createContext, useContext, useState } from "react";

const ListContext = createContext<null | any >(null)
ListContext.displayName = "List"

export default function ListContextProvider({children}: {children:React.ReactNode}) {

    const [count, setCount] = useState(0)
    const [ocultar, setOcultar] = useState("Ocultar Concluídos")
    const [todoList, setTodoList] = useState([])
    const [task, setTask] = useState()
    return (
        <ListContext.Provider value={{ count, setCount, ocultar, setOcultar, todoList, setTodoList, task, setTask }}>
            {children}
        </ListContext.Provider>
    )
}

export function uselistContext() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { count, setCount, ocultar, setOcultar, todoList, setTodoList, task, setTask} = useContext(ListContext)

    return {
        count, setCount, ocultar, setOcultar, todoList, setTodoList, task, setTask
    }
    
}