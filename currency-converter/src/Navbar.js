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
      <div className="navbar">
        <NavLink
        to="/"
        exact
        style={{
            margin: "5px 0px",
            color: "rgba(27, 153, 139, 1)",
            textDecoration: 'none'
        }}
        className='navlink mainlink'>
          Main 
        </NavLink>
        <NavLink
        to="/converter"
        exact
        style={{
            margin: "5px 30px",
            color: "rgba(27, 153, 139, 1)",
            textDecoration: 'none'
        }}
        className ="navlink converterlink">
          Converter
        </NavLink>
        <NavLink
        to="/news"
        exact
        style={{
            margin: "5px 0px",
            color: "rgba(27, 153, 139, 1)",
            textDecoration: 'none'
        }}
        className='navlink newslink'>
          Crytpo News
        </NavLink>
      </div>
    )
  }
export default NavBar  