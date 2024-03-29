import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from "./Search";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";


// Import Link from React Router

export default function Articles () {
  const articles = useSelector(selectArticles)
  
  // grab the search value from useLocation()
  const {search} = useLocation();
  
  // get the queryParams from new URLSearchParams() 
  const queryParams = new URLSearchParams(search);
  
  const title = queryParams.get('title'); // <-- fix me!
  
  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        { 
          filteredArticles.map(article => {
            return (
              <li key={article.slug}>
                {/* Replace these a tags! */}
                <Link to={`/articles/${article.slug}`} />
                  {article.title}
              </li>
            )
          })
        }
      </ul>
      <Search />
    </main>
  )
}
