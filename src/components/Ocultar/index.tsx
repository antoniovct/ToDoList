import { uselistContext } from "@/context/ListContext"
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"

const Ocultar = () => {
  const {count,setOcultar, ocultar} = uselistContext()
  return (
    <div className="font-Poppins px-8 md:flex md:flex-row-reverse md:justify-between md:p-0">
        <button 
          className={`
          bg-[#2E3239]
          text-[#898C91] font-medium text-lg 
          py-4 w-full rounded-xl mt-9 mb-3 
          flex items-center justify-center gap-4
          md:w-[14.5rem] md:px-2 md:py-3 md:gap-3
          `}
          onClick={() => {
            if(ocultar === "Ocultar Concluídos") {
              setOcultar("Mostrar Concluídos")
            } else {
              setOcultar("Ocultar Concluídos")
            }
          }}>
            {ocultar === "Ocultar Concluídos" && <AiOutlineEyeInvisible fontSize = "1.5rem"/>}
            {ocultar === "Mostrar Concluídos" && <AiOutlineEye fontSize = "1.5rem"/>}
            {ocultar}
        </button>
        <span className="text-[#898C91] font-light md:mt-auto">
            {`${count} Concluídos`}
        </span>
    </div>
  )
}

export default Ocultar