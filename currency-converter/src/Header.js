import {NavLink} from "react-router-dom"


function Header(){
    return( 
    <div className = "header">
        <NavLink
        to="/converter"
        exact
        className='navlink mainlink'
        > <h1>Crypto-Convert</h1>
        </NavLink>  
    
        
    </div>
    )
}


export default Header