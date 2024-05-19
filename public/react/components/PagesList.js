import React, { useState, useEffect } from 'react'
import { Page } from './Page'

// When a user clicks a single article in the list, the details show the articles: Title, Author, Content, Tags, Date (createdAt)
// You’ll have to
// Make a fetch request to the /wiki/:slug endpoint for the specific article.
// Set the article data on state (a new piece of state)
// Render the article data in a component
// If a user clicks a “Back to Wiki List” button, the view shows original list of all the articles, no details (just title)

// onclick handler that sets isSinglePage to true and hides other pages
// send isSinglePage props to Page.js
// Page.js will then feth data for the specific page that was clicked

export const PagesList = ({ pages }) => {

	// hide other pages if page is clicked on
	const [isSinglePage, setIsSinglePage] = useState(false);

	// grab pageId from page user clicks on to use for filtering
	const [pageId, setPageId] = useState(0);

	const handleArticleClick = (id) => {
		setIsSinglePage(true);
		setPageId(id);
		console.log("Inside handleArticle Click - id: ", id);
	}

	useEffect(() => {
		console.log("Inside PageList: isSinglePage: ", isSinglePage);
	}, [isSinglePage])

	return <>
		{/* filter and map to retrieve page */}
		{isSinglePage ? (
			pages
				.filter(page => page.id === pageId)
				.map((page, idx) => (
					<Page page={page} key={idx} isSinglePage={isSinglePage} setIsSinglePage={setIsSinglePage} />
				))
		) : <div>
			<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{(pages.map((page, idx) => (
				<span onClick={() => handleArticleClick(page.id)} key={page.id}>
					<Page page={page} key={idx} />
				</span>
			))
			)} </div>

		}
	</>
}
