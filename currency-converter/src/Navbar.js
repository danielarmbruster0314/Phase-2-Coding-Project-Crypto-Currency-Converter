import {NavLink} from "react-router-dom"
import {useState} from 'react';
import styled, {keyframes, css} from 'styled-components';

const animation = keyframes`
0% { opacity: 1; font-size: 1em;}
25% { opacity: 1 ; font-size: 2em;}
75% { opacity: 1; font-size: 2em;}
100% {opacity: 1; font-size: 1em;}

`
const animation1 = keyframes`
0% { opacity: 1; font-size: 1.75em;}
25% { opacity: 1 ; font-size: 1.55em;}
75% { opacity: 1; font-size: 1em;}
100% {opacity: 1; font-size: 1em;}

`

const MyComp = styled.a`
 
  animation: ${props => props.animate && css `${animation} 2s ease-out;`};
  
`;

const Mycomp1 =styled.a`
animation: ${props => props.animate1 && css `${animation1} 1s ease-out;`};`

function NavBar(){
  const[sure, setSure] = useState(false);
  const[sure1, setSure1] = useState(false);
  const[sure2, setSure2] = useState(false);
  const[notsure, setNotSure] = useState(false);
  const[notsure1, setNotSure1] = useState(false);
  const[notsure2, setNotSure2] = useState(false);

  const [style1, setStyle1] = useState({
        margin: "40px",
        color: "#d8adc7",
        textDecoration: 'none',
        textShadow: '2px 2px #bdac73'
  });

  const [style2, setStyle2] = useState({
    margin: "40px",
    color: "#d8adc7",
    textDecoration: 'none',
    textShadow: '2px 2px #bdac73'
})

const [style3, setStyle3] = useState({
  margin: "40px",
  color: "#d8adc7",
  textDecoration: 'none',
  textShadow: '2px 2px #bdac73'
})


  function handleMouseOver(){
   setStyle1({
    margin: "40px",
    color: "#f6eac2",
    textDecoration: 'none',
    textShadow: '2px 2px #bdac73'})
    setSure(true)
    setNotSure(false)
  }

  function handleMouseOut(e){
    setStyle1({margin: "40px",
    color: "#d8adc7",
    textDecoration: 'none',
    textShadow: '2px 2px #bdac73'})
    setSure(false)
    setNotSure(true)
  }

  function handleMouseOver1(){
    setStyle2({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure1(true)
     setNotSure1(false)
   }
 
   function handleMouseOut1(e){
     setStyle2({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure1(false)
     setNotSure1(true)
   }

   function handleMouseOver2(){
    setStyle3({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure2(true)
     setNotSure2(false)
   }
 
   function handleMouseOut2(e){
     setStyle3({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure2(false)
     setNotSure2(true)
   }

    return(
      <div className="navbar">
        <NavLink
        to="/"
        exact
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={
              style1
        }
        className='navlink mainlink'>
          <Mycomp1 animate1={notsure}>
          <MyComp  animate={sure}>Main</MyComp></Mycomp1>  
        </NavLink>
        <NavLink
        to="/converter"
        exact
        onMouseOver={handleMouseOver1}
        onMouseOut={handleMouseOut1}
        style={
           style2       
           }
        className ="navlink converterlink">
          <Mycomp1 animate1={notsure1}>
          <MyComp animate={sure1}>Converter</MyComp></Mycomp1>
        </NavLink>
        <NavLink
        to="/news"
        exact
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
        style={
          style3
        }
        className='navlink newslink'>
          <Mycomp1 animate1={notsure2}>
          <MyComp animate={sure2}>Crytpo News</MyComp></Mycomp1>
        </NavLink>
      </div>
    )
  }
export default NavBar  