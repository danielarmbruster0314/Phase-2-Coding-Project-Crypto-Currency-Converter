import {useState} from 'react';

function Saveconverstion({ saved }){
    const[isOn, setIsON] = useState(false)
    
    


function handleIsOn(){
    setIsON((isOn) => !isOn)
}


    const saved1 = saved.map((save)=>{
        return(
        <li className="article">
        <div>
            <h1>Saved {save.convert} to {save.current}Exchange Rate</h1>
            <p>{save.amount} {save.convert} </p>
            <p>is</p>
            <p>${save.display} {save.current}</p>
        </div>
        </li>
        )
    })
    
    
    return(
        <div>
            <h1 onClick={handleIsOn}>My Saves</h1>
           {isOn ? <ul className="articlelist">
            {saved1}
            </ul>: null}
        </div>
    
    )}

    export default Saveconverstion