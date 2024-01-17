import { useState } from 'react'

let counter = 3;
function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "t 1",
    description: "d 1"
  },
  {
    id: 2,
    title: "t 2",
    description: "d 2"
  },
  {
    id: 3,
    title: "t 3",
    description: "d 3"
  }
])

function addTodo(){
  setTodos([...todos, {
    id: ++counter,
    title: `t ${counter}`,
    description: `d ${counter}`
  }])
}

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({title, description}){
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
}

export default App
