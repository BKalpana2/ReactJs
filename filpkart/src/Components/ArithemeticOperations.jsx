import React, { useState } from 'react'

function ArithemeticOperations() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')

  function add() {
    setResult(Number(num1) + Number(num2))
  }

  function subtract() {
    setResult(Number(num1) - Number(num2))
  }

  function multiply() {
    setResult(Number(num1) * Number(num2))
  }

  function divide() {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero')
    } else {
      setResult(Number(num1) / Number(num2))
    }
  }

  function clear() {
    setNum1('')
    setNum2('')
    setResult('')
  }

  return (
    <div className="container">

      <h1>Arithmetic Calculator</h1>

      <label>Enter First Number:</label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
    <br></br><br></br>
      <label>Enter Second Number:</label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
    <br></br><br></br>
      <div className="buttons">
        <button onClick={add}>ADD (+)</button>
        <button onClick={subtract}>SUBTRACT (-)</button>
        <button onClick={multiply}>MULTIPLY (*)</button>
        <button onClick={divide}>DIVIDE (/)</button>
      </div>

      <h2>Result: {result}</h2>

      <button onClick={clear}>CLEAR</button>

    </div>
  )
}

export default ArithemeticOperations;