import './App.css';
import Counter from './counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1);
  const [maxNum, setMax] = useState(1);
  const [reset, setReset] = useState(false);
  const [highest, changeHighest] = useState(0);

  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }

  function handleMax(e){
    console.log(e);
    setMax(Number(e.target.value))
  }
  
  function getReset(data){
    console.log(data)
    setReset(data)
  }

  function setHighest(num){
    if (num > highest){
      changeHighest(num)
    }
  }

  return (
    <div classname="App">
      Add
      <input type="number" value={delta} onChange = {handleDelta}/>
      <p>Highest so far:</p>
      <p>{highest}</p>
      <p>Maximum counter value:</p>
      <input type="number" value={maxNum} onChange={handleMax} />
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset}/>
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset}/>
    </div>
  );
}

export default App;