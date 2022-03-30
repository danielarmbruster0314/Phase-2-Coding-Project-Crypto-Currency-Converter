import {NavLink} from "react-router-dom"
import styled, {keyframes} from 'styled-components';

const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(30deg); filter: blur(10px);}
25% { opacity: 1 ; transform: translateY(0px) skewY(0deg) skewX(0deg); filter: blur(0px);}
75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg); filter: blur(0px);}
100% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(30deg); filter: blur(10px);}
`

const Header2 = styled.h1`
display: inline-block;
animation: 4s ${animation}  infinite ;


`
// const animation2 = keyframes`
// 0% { opacity: 1; background:linear-gradient(.25turn,rgba(197, 216, 109, 1),rgb(255,255,255),rgb(255,255,255));}
// 25% { opacity: 1 ; background: linear-gradient(.25turn,rgb(255,255,255),rgba(197, 216, 109, 1));}
// 75% { opacity: 1; background: linear-gradient(.25turn,rgb(255,255,255),rgb(255,255,255),rgba(197, 216, 109, 1));}
// 100% {opacity: 1; background: linear-gradient(.25turn,rgba(197, 216, 109, 1),rgb(255,255,255));}

// `


// const Added = styled.div`

// animation: 4s ${animation2} infinite;
// `

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
// animation-name: ${animation}
// animation-duration: 6s;
// animation-fill-mode: forwards;
// animation-iteration-count: infinite;
//animation: 1s ${animation} ease-out;
export default Header