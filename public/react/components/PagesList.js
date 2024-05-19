import React, { useState, useEffect } from 'react'
import { Page } from './Page'

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
