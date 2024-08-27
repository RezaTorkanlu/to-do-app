import React from 'react'
import { FaPlus } from "react-icons/fa";

function Form({ todo, change, submit, error }) {
  return (
    <form onSubmit={submit} className='grid grid-flow-col grid-row-2  shadow h-20 rounded-lg bg-white dark:bg-slate-700'>
      <div className="grid  justify-center items-center ">
        <input
          type="text"
          className='outline-none dark:bg-slate-700 dark:text-white col-span-1 '
          placeholder='write somthing'
          value={todo}
          onChange={change}
        />
        {error && <small className='text-red-500  text-sm col-span-1'>{error}</small>}
      </div>
      <div className="grid col-span-1 justify-center items-center">
        <button><FaPlus className='text-slate-600 hover:text-blue-600' /></button>
      </div>

    </form>
  )
}

export default Form