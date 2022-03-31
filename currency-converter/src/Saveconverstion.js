import {useSate} from 'react';

function Saveconverstion({ saved }){
    const[isOn, setIsON] = useSate(true) 
    const saved1 = saved.map((save)=>{
        return(
        <li>
        <div>
            <h1>Saved {save.convert} to {save.current}Exchange Rate</h1>
            <p>{save.amount}{save.converted} </p>
            <p>is</p>
            <p>{save.display}{save.current}</p>
        </div>
        </li>
        )
    })
    
    
    return(
        <div>
            <h1>My Saves</h1>
           {isOn ? <ul>
            {saved1}
            </ul>: null}
        </div>
    
    )}