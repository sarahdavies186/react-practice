import { useState } from "react";
import React from 'react';

function Die() {
  const [number, setNumber] = useState('Roll the dice')

  function handleClick() {
    setNumber(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <button className="dice" onClick={handleClick}>{number}</button>
  )
}

export default Die;