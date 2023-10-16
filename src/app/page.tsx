"use client"

import Header from "@/components/Header";
import List from "@/components/List";
import NewNote from "@/components/NewNote";
import Ocultar from "@/components/Ocultar";
import { uselistContext } from "@/context/ListContext";

export default function Home () {
  const {todoList} = uselistContext()
  
  return (
    
    <main className="">
      <Header/>
      <Ocultar/>
      {todoList.map((list: string) => (<List textList={list} key={list}/>))}
      <NewNote/>
      
    </main>
  )
}
