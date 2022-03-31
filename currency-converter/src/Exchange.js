import {useState} from 'react'; 




function Exchange({ exchange, current, converted, displayResult, amount, handleSave }){
    const [isOn, setIsOn] = useState(false)
    
    console.log(current)

    function handleNewSave(exchange,current,converted,displayResult,amount){
        handleSave(exchange,current,converted,displayResult,amount)
    }

    function handleButtonClick(){
    setIsOn((isOn)=>!isOn )
}
    return(
        <div className="exchanger">
            <h2 className="rate">Exchange Rate</h2>
            {isOn ? <span>
                <p>$ {Math.floor(exchange)}.00 per unit</p>
                <p>$ {displayResult}</p>
                </span> : <span>
                    <p>$ {exchange} per unit</p>
                    <p>$ {displayResult}</p>
                </span>}
            
            <p>{converted} to {current}</p>
            <button className="bot_button" onClick={handleButtonClick}>Round Exchange</button>
            <button onClick={()=>handleNewSave(exchange,current,converted,displayResult,amount)}>Save Converstion</button>
        </div>
    )
}

export default Exchange