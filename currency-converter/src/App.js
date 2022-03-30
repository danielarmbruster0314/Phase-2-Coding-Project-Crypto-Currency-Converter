import { useState, useEffect } from 'react';
import Header from './Header.js';
import Convert from './Convert.js';
import NewsList from './NewsList.js';
import NavBar from './Navbar.js';
import { Route, Switch } from "react-router-dom"

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

let articles=article.splice(20, 12)


console.log(articles)
  return (
    <div className="App">
     
        <Switch>
          <Route exact path="/">
            <Header />
          </Route> 
          <Route exact path="/converter">
            <NavBar />
            <Convert />
          </Route>
          <Route exact path="/news">
          <NavBar />
            <NewsList articles={articles}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;