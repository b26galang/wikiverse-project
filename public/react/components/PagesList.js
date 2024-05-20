import React, { useState } from 'react'
import { Page } from './Page'

export const PagesList = ({
	pages,
	setIsAddingArticle,
	isArticleDeleted,
	setIsArticleDeleted,
	setIsSinglePage,
	isSinglePage
}) => {

	// grab pageId from page user clicks on to use for filtering
	const [pageId, setPageId] = useState(0);

	const handleArticleClick = (id) => {
		setIsSinglePage(true);
		setPageId(id);
	}

	return <>
		{isSinglePage ? (
			pages
				.filter(page => page.id === pageId)
				.map((page, idx) => (
					<Page page={page} key={idx}
						isSinglePage={isSinglePage}
						setIsSinglePage={setIsSinglePage}
						setIsArticleDeleted={setIsArticleDeleted}
						isArticleDeleted={isArticleDeleted}
					/>
				))
		) : <div>
			<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{(pages.map((page, idx) => (
				<span onClick={() => handleArticleClick(page.id)} key={page.id}>
					<Page page={page} key={idx}

					/>
				</span>
			))
			)}
			<button onClick={() => setIsAddingArticle(true)}>Create Page</button>
		</div>
		}
	</>
}
