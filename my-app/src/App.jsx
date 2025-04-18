import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Counter Application by function component </h1>
      <p>Count: {count} </p>
       <button onClick={() => setCount((count) => count + 1)}>
          Incerese 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease 
        </button>
        <button onClick={() => setCount(0)}>
          Reset 
        </button>
    </div>
  )
}

export default App
