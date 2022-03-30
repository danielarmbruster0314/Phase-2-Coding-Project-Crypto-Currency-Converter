function Article({article}){
    return(

        <li className="article">
            <div className="card">
            <div className='the-card'>
            <img alt="crypto" src="https://source.unsplash.com/random/?Cryptocurrency&1"/>
            <h4>{article.title}</h4>
            <a href={article.url}>Click here to read article words</a>
            </div>
            </div>
        </li>
    )
}
export default Article;