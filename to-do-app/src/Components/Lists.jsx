import React from 'react'
import ListItem from './ListItem'


function Lists({ del, done, todos }) {
  if(todos.length <= 0){
    return(
      <div className='bg-white p-5 text-center dark:text-white dark:bg-slate-700 mt-5 rounded '>
          <h2>Your todo List is Empty</h2>
      </div>
    )
  }
  return (
    <div className="list shadow mt-5 rounded-lg bg-white">
      <ul>
        {
          todos && todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              delHandler={del}
              doneHandler={done}
              title={todo.title} 
              done={todo.done}
              />
          ))
        }
      </ul>
    </div>
  )
}

export default Lists