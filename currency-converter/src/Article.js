function Article({article}){
    return(
        <li>
            <div className="card">
            <div className='the-card'>
                <img src="https://source.unsplash.com/random/?Cryptocurrency" alt="cripto"/> 
            <h4>{article.title}</h4>
            <a href={article.url}>Click here to read article words</a>
            </div>
            </div>
        </li>
    )
}
export default Article;