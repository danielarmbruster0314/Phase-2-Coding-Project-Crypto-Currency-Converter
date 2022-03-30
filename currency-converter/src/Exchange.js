import {useState} from 'react'; 




function Exchange({ exchange, current, converted }){
    const [isOn, setIsOn] = useState(false)
    
    
    function handleButtonClick(){
    setIsOn((isOn)=>!isOn )
}
    return(
        <div>
            <h1>Exchange Rate</h1>
            {isOn ? <p>$ {Math.floor(exchange)}.00</p> : <p>$ {exchange}</p>}
            
            <p>{converted} to {current}</p>
            <button onClick={handleButtonClick}>Round Exchange</button>
        </div>
    )
}

export default Exchange