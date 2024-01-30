import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment the counter</button>
    </div>
  )
}



export default Counter;