import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;

// import and prepend the api url to any fetch calls
import apiURL from '../api'

// When a user clicks a single article in the list, the details show the articles: Title, Author, Content, Tags, Date (createdAt)
// You’ll have to
  // Make a fetch request to the /wiki/:slug endpoint for the specific article.
  // Set the article data on state (a new piece of state)
  // Render the article data in a component
// If a user clicks a “Back to Wiki List” button, the view shows original list of all the articles, no details (just title)

export const App = () => {
  const [pages, setPages] = useState([])
  const [articleData, setArticleData] = useState({});

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
		<main>
			<PagesList pages={pages} />
		</main>
  )
}
