import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from 'react';

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  return (
    <div className="App">
      <input 
        type = "text"
        value = {input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr/>
      <ChildComponent count={count} onClick={incrementCount}/>
    </div>
  );
}


const ChildComponent= React.memo(function({count, onClick}) {
      console.log("Child component is rendering");;

      return (
        (<>
          <div>
            <h3>Count: {count}</h3>
            <button onClick={onClick}>Increment</button>
          </div>
        </>)
        );
      }
  )
export default App;
