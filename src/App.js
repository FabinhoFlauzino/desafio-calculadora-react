
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMultiNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('X')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      handleOnClear()
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        case 'X':
          handleMultiNumbers();
          break;
        default:
          break;
      }
    }

  }

  return (
    <>
      <div id="app">
        <div id="display">
          <div id="last-calc">
            <div style={{ paddingTop: '40px' }}></div>
          </div>
          <div id="result">
            <span></span>
            {/* <img src="./assets/iquals.svg" alt="Sinal de Igual" /> */}
            <span style={{ overflow: 'hidden' }}>{currentNumber}</span>
          </div>
        </div>

        <div id="keyboard">
          <button className="clear" onClick={handleOnClear}>CE</button>
          <button onClick={handleOnClear}>C</button>
          <button></button>
          <button className="functions" onClick={handleDivideNumbers} >/</button>

          <button onClick={() => handleAddNumber('7')}>7</button>
          <button onClick={() => handleAddNumber('8')}>8</button>
          <button onClick={() => handleAddNumber('9')}>9</button>
          <button className="functions" onClick={handleMultiNumbers}>X</button>

          <button onClick={() => handleAddNumber('4')}>4</button>
          <button onClick={() => handleAddNumber('5')}>5</button>
          <button onClick={() => handleAddNumber('6')}>6</button>
          <button className="functions" onClick={handleMinusNumbers}>-</button>

          <button onClick={() => handleAddNumber('1')}>1</button>
          <button onClick={() => handleAddNumber('2')}>2</button>
          <button onClick={() => handleAddNumber('3')}>3</button>
          <button className="functions" onClick={handleSumNumbers}>+</button>

          <button></button>
          <button onClick={() => handleAddNumber('0')}>0</button>
          <button ></button>
          <button className="functions" onClick={handleEquals}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
