import {useState} from 'react'; 




function Exchange({ exchange, current, converted }){
    const [isOn, setIsOn] = useState(false)
    
    
    function handleButtonClick(){
    setIsOn((isOn)=>!isOn )
}
    return(
        <div className="exchanger">
            <h1 className="rate">Exchange Rate</h1>
            {isOn ? <p>$ {Math.floor(exchange)}.00</p> : <p>$ {exchange}</p>}
            
            <p>{converted} to {current}</p>
            <button className="bot_button" onClick={handleButtonClick}>Round Exchange</button>
        </div>
    )
}

export default Exchange