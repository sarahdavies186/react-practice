import React, { useState } from 'react'; 


export default function App() {
  const [name, setName] = useState("Sarah");
  const [inputValue, setInputValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputValue);
    setInputValue("");
  } 

  return (
    <>
    <Greeting name={name} />
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button>Submit</button>
    </form>
    </>
  );
}

function Greeting(props) {
  return (
    <div>Hello, {props.name}</div>
  )
}