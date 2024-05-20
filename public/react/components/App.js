import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import AddPageForm from './AddPageForm'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [isArticleDeleted, setIsArticleDeleted] = useState(false);
  const [isSinglePage, setIsSinglePage] = useState(false);

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
    if (!isAddingArticle) {
      fetchPages()
    } else if (isArticleDeleted) {
      setIsArticleDeleted(false);
      fetchPages();
    }
  }, [isAddingArticle, isArticleDeleted])

  return (
    <main>
      {isAddingArticle ?
        <AddPageForm setIsAddingArticle={setIsAddingArticle} />
        : (
          <PagesList
            pages={pages}
            isAddingArticle={isAddingArticle}
            setIsAddingArticle={setIsAddingArticle}
            setIsArticleDeleted={setIsArticleDeleted}
            setIsSinglePage={setIsSinglePage}
            isSinglePage={isSinglePage}
            isArticleDeleted={isArticleDeleted}
          />
        )}
    </main>
  )
}

export default App;