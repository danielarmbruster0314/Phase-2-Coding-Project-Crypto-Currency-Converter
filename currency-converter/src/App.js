import { useState, useEffect } from 'react';
import Header from './Header.js';
import Convert from './Convert.js';
import Exchange from './Exchange.js';
import NewsList from './NewsList.js';
function App() {
const [article, setArticle] = useState([])

useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': '89810da5e7msh75b30d17b69208cp1d4af1jsne241ce2de733'
    }
  };
  
  fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
    .then(response => response.json())
    .then(response => setArticle(response))
    .catch(err => console.error(err));
},[])
console.log(article)
let articles=article.splice(0,10)

useEffect(()=>{
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
  //     'X-RapidAPI-Key': '89810da5e7msh75b30d17b69208cp1d4af1jsne241ce2de733'
  //   }
  // };
  
  // fetch('https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
},[])


  return (
    <div className="App">
      <Header />
      <Convert />
      <Exchange />
      <NewsList articles={articles}/>
    </div>
  );
}

export default App;