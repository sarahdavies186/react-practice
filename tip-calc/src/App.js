import { useState } from "react";

export default function App() {
  return (
    <TipCalculator />
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  function handleReset() {
    setBill("");
    setPercentageOne(0)
    setPercentageTwo(0)
  }

 return (
  <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <ServiceAmount percentage={percentageOne} onSelect={setPercentageOne}><label>How did you like the service?</label></ServiceAmount>
      <ServiceAmount percentage={percentageTwo} onSelect={setPercentageTwo}><label>How did your friend like the service?</label></ServiceAmount>
      {bill > 0 && <><TotalAmount bill={bill} percentageOne={percentageOne} percentageTwo={percentageTwo}/>
      <Reset onReset={handleReset}/></>}
    </div>
 )
}

function BillInput( {bill, onSetBill} ) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={bill} onChange={(e)=> onSetBill(Number(e.target.value))}/>
    </div>
  );
}

function ServiceAmount( { percentage, onSelect, children} ) {
  return (
    <div>
      {children}
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option type="text" value="5">It was ok (5%)</option>
        <option type="text" value="10">It was good (10%)</option>
        <option type="text" value="20">It was great (20%)</option>
      </select>
    </div>
  );
}

function TotalAmount( {bill, percentageOne, percentageTwo} ) {
  let averagePercentage = (percentageOne + percentageTwo) / 2;
  let tipTotal = ((averagePercentage / 100) * bill);

  console.log(averagePercentage)

  return(
    <div>You pay ${bill + tipTotal} (${bill} + ${tipTotal})</div>
  )
}

function Reset( {onReset} ) {

  return(
    <button onClick={onReset}>Reset</button>
  )
}


