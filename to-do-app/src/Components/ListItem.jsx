import React from 'react'
import { FaTimes, FaCheck } from "react-icons/fa";
function ListItem({ delHandler, doneHandler, title, id ,done }) {
  return (
    <li className='flex justify-between bg-white items-center p-5 border-b border-slate-500   dark:bg-slate-700 dark:text-white'>
      {done ? <p className='line-through'>{title}</p>:title}
      <div className="mx-2 ">
        <button onClick={()=>doneHandler(id)} className='mx-3'>
          {done ? <FaCheck className='text-green-700 '/>: <FaCheck className='text-slate-600 hover:text-green-600'/>}
        </button>
        <button onClick={() => delHandler(id)} >
          <FaTimes className='text-slate-600 hover:text-red-700'/>
        </button>
      </div>
    </li>
  )
}

export default ListItem