import {useState} from "react";
function Counter(props) {
    const {delta} = props
    const [count, setCount] = useState(1);
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        console.log(count)
    }
    function resetCount(){
        setCount(0)
    }
   
    
  return (
    <div className="counter">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to counter</button>
        <button onClick={resetCount}>Click to reset the count</button>
    </div>
  );
}


export default Counter;
