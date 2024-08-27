import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout'
import Header from './Components/Header'
import Lists from './Components/Lists'
import Form from './Components/Form'

function App() {

  // input validation
  const [error, setError] = useState(null)
  // input-value
  const [todo, setTodo] = useState("");
  // manage datas form submited
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(saveTodos);
    return parsedTodos || "";
  });
  // dark or light mode
   const [dark, setDark] = useState(false)
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitItems = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError('most be more than 5 characters');
      return false;
    }

    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
    setError(null);
    setTodo("");
  }
  const delHandler = (todoId) => {
    const updateTodos = todos.filter((item) => item.id !== todoId)
    setTodos(updateTodos)
  }
  const doneHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done
    }
    setTodos(duplicateTodos);
  }
  const themeChange = () => {
    setDark(!dark);
    document.body.classList.toggle("dark")
  }
  
  return (
    <div className='bg-light-mood-bg bg-no-repeat  dark:bg-dark-mood-bg dark:bg-slate-800'>
      <Header
        theme={themeChange}
        dark={dark}
      />
      <Layout>
        <Form
          todo={todo}
          change={(e) => setTodo(e.target.value)}
          submit={submitItems}
          error={error}
        />
        <Lists
          del={delHandler}
          done={doneHandler}
          todos={todos} />
      </Layout>
    </div>
  )
}

export default App