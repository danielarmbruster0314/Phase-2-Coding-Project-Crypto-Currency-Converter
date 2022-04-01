import {useState} from 'react';
import styled, { keyframes, css } from 'styled-components';




const animation = keyframes`
0% { opacity: 1; font-size: 1.5em;}
25% { opacity: 1 ; font-size: 2em;}
75% { opacity: 1; font-size: 2em;}
100% {opacity: 1; font-size: 1.5em;}
`

const animation1 = keyframes`
0% { opacity: 1; font-size: 2.5em;}
25% { opacity: 1 ; font-size: 2em;}
75% { opacity: 1; font-size: 1.75em;}
100% {opacity: 1; font-size: 1.25em;}
`
const MyComp = styled.p`
font-size: 1em;
  animation: ${props => props.animate && css
    `${animation} 2s ease-out infinite`};
`;

const MyComp1 = styled.p`

  animation: ${props => props.animate1 && css
    `${animation1} 2s ease-out`};
`;
function Saveconverstion({ saved, handleDelete }){
    const[isOn, setIsON] = useState(false);
    const[sure, setSure] = useState(false); 
    const[sure1, setSure1] = useState(false);

    function handleMouseOver(){
        setSure(true)
        setSure1(false)
    }


    function handleMouseOut(){
        setSure(false)
        setSure1(true)
    }

function handleIsOn(){
    setIsON((isOn) => !isOn)
}



    const saved1 = saved.map((save)=>{
        return(
        <li className="article">
        <div>
            <h1 onClick={()=>handleDelete(save.id)}>Saved {save.convert} to {save.current}Exchange Rate</h1>
            <p>{save.amount} {save.convert} </p>
            <p><img className="coin2" src="https://i.gifer.com/origin/71/719ea2f44c791fc07e0e811940a0232b_w200.gif" alt ="plz"/> is <img className="coin2" src="https://i.gifer.com/origin/71/719ea2f44c791fc07e0e811940a0232b_w200.gif" alt ="plz"/></p>
            <p>${save.display} {save.current}</p>
           
        </div>
        </li>
        )
    })
    
    
    return(
        <div><MyComp1 animate1={sure1}>
            <h1 
            className="saveheader" 
            onClick={handleIsOn} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
                
            <MyComp animate={sure}>My Saves</MyComp></h1></MyComp1>
           {isOn ? <ul className="articlelist">
            {saved1}
            </ul>: null}
        </div>
    
    )}

    export default Saveconverstion