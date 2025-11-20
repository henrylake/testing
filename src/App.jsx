import { useState } from 'react'
import './App.css'

let placeholderTodos = [
  {
    id: 1,
    name: 'Write app',
    completed: false
  },
  {
    id: 2,
    name: 'Do wash',
    completed: false
  },
  {
    id: 3,
    name: 'Eat lunch',
    completed: true
  }
]

function TodoList() {
  const [todos, setTodos] = useState(placeholderTodos)
  
  function toggleBox(e) {
    const id = e.target.id
    const todoIndex = todos.findIndex((_todo) => String(_todo.id) === String(id))
    const todo = todos[todoIndex]
    const newTodos = [
      ...todos.slice(0, todoIndex),
      {
        ...todo,
        completed: !todo.completed
      },
      ...todos.slice(todoIndex + 1)
    ]
    setTodos(newTodos)
  }
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} onClick={toggleBox} />)
}

function TodoItem({todo, onClick}) {
  return <div className='todo-item'>
    <input className='todo-checkbox' id={todo.id} type='checkbox' checked={todo.completed} onChange={onClick} />
    {todo.name}
  </div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Slide 2</h1>
       {<TodoList />} 
      </div>
    </>
  )
}

export default App
