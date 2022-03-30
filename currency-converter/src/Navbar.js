import {NavLink} from "react-router-dom"

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
    return(
      <div>
        <NavLink
        to="/"
        exact
        className='navlink mainlink'>
          Main 
        </NavLink>
        <NavLink
        to="/converter"
        exact
        className ="navlink converterlink">
          Converter
        </NavLink>
        <NavLink
        to="/news"
        exact
        className='navlink newslink'>
          Related Crytpo News
        </NavLink>
      </div>
    )
  }
export default NavBar  