import './App.css';
import Counter from './counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1);
  const [maxNum, setMax] = useState(1);

  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }

  function handleMax(e){
    console.log(e);
    setMax(Number(e.target.value))
  }
  

  return (
    <div classname="App">
      Usestates
      <input type="number" value={delta} onChange = {handleDelta}/>
      <p>Another line</p>
      <p>Maximum counter value:</p>
      <input type="number" value={maxNum} onChange={handleMax} />
      <Counter delta = {delta} maxNum = {maxNum}/>
      <Counter delta = {delta} maxNum = {maxNum}/>
    </div>
  );
}

export default App;