import Article from "./Article";

function NewsList({articles}){
  let list = articles.map((article) =>{
      return <Article key={article.title} article={article}/>
  })
  
    return(

        <div className="news-list">
            <h1>Related News</h1>
            <ul className="articlelist">
                {list}
            </ul>
        </div>
    )
}


export default NewsList;
