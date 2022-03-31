import {useState} from 'react';
import styled, { keyframes, css } from 'styled-components';




const animation = keyframes`
0% { opacity: 1; font-size: 2em;}
25% { opacity: 1 ; font-size: 3em;}
75% { opacity: 1; font-size: 3em;}
100% {opacity: 1; font-size: 2em;}
`


const MyComp = styled.p`
font-size: 2em;
  animation: ${props => props.animate && css
    `${animation} 2s ease-out infinite`};
`;

function Saveconverstion({ saved }){
    const[isOn, setIsON] = useState(false)
    const[sure, setSure] = useState(false); 
    

    function handleMouseOver(){
        setSure(true)
    }


    function handleMouseOut(){
        setSure(false)
    }

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
            <h1 
            className="saveheader" 
            onClick={handleIsOn} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <MyComp animate={sure}>My Saves</MyComp></h1>
           {isOn ? <ul className="articlelist">
            {saved1}
            </ul>: null}
        </div>
    
    )}

    export default Saveconverstion