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
h1{
    display: inline-block;
animation: 4s ${animation}  infinite ;
}
h1:nth-child(1){
animation-delay: 0s;
}
h1:nth-child(2){
    animation-delay: 0.3s;
}h1:nth-child(3){
    animation-delay: 0.6s;
}h1:nth-child(4){
    animation-delay: 0.9s;
}h1:nth-child(5){
    animation-delay: 1.2s;
}h1:nth-child(6){
    animation-delay: 1.5s;
}h1:nth-child(7){
    animation-delay: 1.8s;
}h1:nth-child(8){
    animation-delay: 2.1s;
}h1:nth-child(9){
    animation-delay: 2.4s;
}h1:nth-child(10){
    animation-delay: 2.7s;
}h1:nth-child(11){
    animation-delay: 2.9s;
}h1:nth-child(12){
    animation-delay: 3.2s;
}h1:nth-child(13){
    animation-delay: 3.5s;
}h1:nth-child(14){
    animation-delay: 3.8s;
}h1:nth-child(15){
    
}
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

const reacArray="CryptoConverter".split("")










    return( 
    <div className = "header">
        
        <NavLink
        to="/converter"
        exact
        className='navlink mainlink'
        style={{
            color: "#d8adc7",
            textDecoration: 'none'
        }}
        > <Header2>{reacArray.map((item, index)=>(
            <h1 key={index}>{item}</h1>
        ))}</Header2>
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