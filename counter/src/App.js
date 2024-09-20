import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("august 10, 2024");
  date.setDate(date.getDate() + count);


  return (
    <div>
      <div>
        <input type="range" min="0" max="10" id="step" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
        <label for="step">{step}</label>
      </div>
      {/* <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div> */}
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input onChange={(e) => setCount(Number(e.target.value))} value={count}/>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : count < 0`${count} days ago was `} </span>
        {date.toDateString()}
      </div>
    </div>
  );
}
