import {useState, useEffect} from "react";

function Counter(props) {
    const {delta, maxNum, getReset,needToReset, setHighest} = props
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        if (needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset, getReset])
    
    
    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + props.delta > props.maxNum){
                setCount(0)
                }
                else {
                    setHighest (oldCount + props.delta);
                    return (oldCount + props.delta)
                }
            }
            
        )
        console.log(count)
    }

    function resetCount(){
        getReset(true)
        //setCount(0)
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
