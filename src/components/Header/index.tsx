

const Header = () => {
  return (
    <header 
    className={`
        font-Poppins
    `}>
        <h1 
        className={`
            text-white text-2xl font-bold md:text-4xl 
        `}>
            to do list
        </h1>
        <span 
        className={`
            text-[#898C91] text-xs font-normal mb-4 inline-block md:text-sm
        `}>
            vamos deixar de procrastinar?
        </span>
        <hr className="bg-[#898C91] opacity-10" />
    </header>
  )
}

export default Header