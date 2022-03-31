import Article from "./Article";
import styled, {keyframes} from 'styled-components';

const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewY(10deg) ; ;}
25% { opacity: .5 ; transform: translateY(-75px) skewY(20deg) ; ;}
75% { opacity: .7; transform: translateY(-50px) skewY(20deg)  ;}
100% {opacity: 1; transform: translateY(0px) skewY(10deg) ; ;}
`

const Header2 = styled.h1`
display: inline-block;
h1{
    display: inline-block;
animation: 1s ${animation}  ease-in-out ;
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
}
    
}
`




function NewsList({articles}){
    const reacArray="Related News".split("")

  let list = articles.map((article) =>{
      return <Article key={article.title} article={article}/>
  })
  



    return(

        <div className="news-list">
            <Header2>{reacArray.map((item, index)=>(
            <h1 key={index}>{item}</h1>
        ))}</Header2>
            <ul className="articlelist">
                {list}
            </ul>
        </div>
    )
}


export default NewsList;
