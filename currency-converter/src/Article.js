function Article({article}){
    return(
        <li>
            <img src="https://source.unsplash.com/random/?Cryptocurrency" alt="sample text"/>
            <h4>{article.title}</h4>
            <a href={article.url}>Click here to read article words</a>
        </li>
    )
}
export default Article;