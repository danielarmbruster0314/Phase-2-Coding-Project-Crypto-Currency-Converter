function Article({article}){
    return(
        <li>
            <img src="https://source.unsplash.com/random/?Cryptocurrency" alt="sample text"></img>
            <h4>{article.title}</h4>
            <a href={article.url}>Click here to read article</a>
        </li>
    )
}
export default Article;