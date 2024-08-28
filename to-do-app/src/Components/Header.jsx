import React from 'react'
import { IoMoon , IoSunny} from "react-icons/io5";
function Header({theme,dark}) {
  return (
    <div className='flex justify-center p-5 items-center max-sm:justify-between '>
      <h1 className='font-extrabold text-3xl text-white mx-36 max-sm:m-10 md:mt-10 '>TO DO</h1>
      <button className='mx-36 max-sm:m-10 md:mt-10 ' onClick={theme} >
      {
        dark ? <IoSunny className='size-8 text-white'/>:<IoMoon className='size-8 text-white'/>
      }
      </button>
    </div>
  )
}

export default Header