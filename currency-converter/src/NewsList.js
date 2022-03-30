import Article from "./Article";

function NewsList({articles}){
  let list = articles.map((article) =>{
      return <Article key={article.url} article={article}/>
  })
  
    return(
        <div className='Newsdiv'>
            <h1>Related News</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}


export default NewsList;
