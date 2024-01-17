import { useEffect, useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(function(){
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async function(data){
        const resp = await data.json();
        setTodos(resp.todos);
      })
    }, 5000)
  },[])
  return <>

    {todos.map((todo, index)=> <Todo key={index} title={todo.title}description={todo.description} />)}
    {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </>
  
}

function Todo({title, description}){
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
}

export default App
