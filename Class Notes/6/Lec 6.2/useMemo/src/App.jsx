import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  let sum = 0;
  for(let i=1 ; i<=inputValue ; i++){
    sum+=i;
  }

  return (
    <>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }}></input>
      <p>Sum of 1 to {inputValue} is {sum}</p>
      <button onClick={()=>{
        setCount(count+1);
      }}>Count is {count}</button>
    </>
  )
}

export default App
