import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("august 10, 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : count < 0`${count} days ago was `} </span>
        {date.toDateString()}
      </div>
    </div>
  );
}
