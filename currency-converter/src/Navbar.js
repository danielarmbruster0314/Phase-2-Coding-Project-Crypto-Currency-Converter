import {NavLink} from "react-router-dom"
import {useState} from 'react';
import styled, {keyframes, css} from 'styled-components';

const animation = keyframes`
0% { opacity: 1; font-size: 1em;}
25% { opacity: 1 ; font-size: 2em;}
75% { opacity: 1; font-size: 2em;}
100% {opacity: 1; font-size: 1em;}
`


const MyComp = styled.a`
  animation: ${props => props.animate && css
    `${animation} 2s ease-out infinite`};
`;

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
  const[sure, setSure] = useState(false);
  const[sure1, setSure1] = useState(false);
  const[sure2, setSure2] = useState(false);

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
  }

  function handleMouseOut(e){
    setStyle1({margin: "40px",
    color: "#d8adc7",
    textDecoration: 'none',
    textShadow: '2px 2px #bdac73'})
    setSure(false)
  }

  function handleMouseOver1(){
    setStyle2({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure1(true)
   }
 
   function handleMouseOut1(e){
     setStyle2({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure1(false)
   }

   function handleMouseOver2(){
    setStyle3({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure2(true)
   }
 
   function handleMouseOut2(e){
     setStyle3({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
     setSure2(false)
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
          <MyComp animate={sure}>Main</MyComp>  
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
          <MyComp animate={sure1}>Converter</MyComp>
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
          <MyComp animate={sure2}>Crytpo News</MyComp>
        </NavLink>
      </div>
    )
  }
export default NavBar  