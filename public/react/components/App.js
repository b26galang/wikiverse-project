import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import AddPageForm from './AddPageForm'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  async function fetchPages() {
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
  }, [isAddingArticle])

  return (
    <main>
      {isAddingArticle ?
        <AddPageForm setIsAddingArticle={setIsAddingArticle} />
        : (
          <PagesList pages={pages} isAddingArticle={isAddingArticle} setIsAddingArticle={setIsAddingArticle} />
        )}
    </main>
  )
}

export default App;