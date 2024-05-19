import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

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
