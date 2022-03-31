import {NavLink} from "react-router-dom"
import {useState} from 'react';

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
  }

  function handleMouseOut(e){
    setStyle1({margin: "40px",
    color: "#d8adc7",
    textDecoration: 'none',
    textShadow: '2px 2px #bdac73'})
  }

  function handleMouseOver1(){
    setStyle2({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
   }
 
   function handleMouseOut1(e){
     setStyle2({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
   }

   function handleMouseOver2(){
    setStyle3({
     margin: "40px",
     color: "#f6eac2",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
   }
 
   function handleMouseOut2(e){
     setStyle3({margin: "40px",
     color: "#d8adc7",
     textDecoration: 'none',
     textShadow: '2px 2px #bdac73'})
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
          Main 
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
          Converter
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
          Crytpo News
        </NavLink>
      </div>
    )
  }
export default NavBar  