import {NavLink} from "react-router-dom"
import styled, {keyframes} from 'styled-components';

const animation = keyframes`
0% { opacity: 0; }
100% {opacity: 1;}
`

const Header2 = styled.h1`
animation-name: ${animation}
animation-duration: 6s;
`

function Header(){
    return( 
    <div className = "header">
        <NavLink
        to="/converter"
        exact
        className='navlink mainlink'
        style={{
            color: "rgba(27, 153, 139, 1)",
            textDecoration: 'none'
        }}
        > <Header2>Crypto-Converter</Header2>
        </NavLink>  
    
        
    </div>
    )
}


export default Header