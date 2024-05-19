import React, { useEffect, useState } from 'react'

export const Page = ({ page, isSinglePage, setIsSinglePage }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState("");

  // add function for converting date to dd/mm/yyyy

  useEffect(() => {
    const getPage = async () => {
      if (isSinglePage) {
        try {
          const result = await fetch(`http://localhost:3000/api/wiki/${page.slug}`);
          console.log("result from fetch: ", result);
          if (!result.ok) {
            throw new Error("Failed to fetch page data");
          }
          const foundPage = await result.json();
          setTitle(foundPage.title);
          setAuthor(foundPage.author.name);
          setContent(foundPage.content);
          setTags(foundPage.tags);
          setDate(foundPage.createdAt);
        } catch (error) {
          console.error("Error fetching page data:", error);
        }
      }
    }
    getPage();
  }, [page.slug, isSinglePage])

  return <>
    {isSinglePage ? (
      <div key={page.id}>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Published: {date}</p>
        <p>{content}</p>
        <p>Tags: </p>
        {tags.length > 0 ?
          tags.map((tag, idx) => (
            <p key={idx}>{tag.name}</p>
          ))
          : ""}
        <button onClick={() => setIsSinglePage(false)}>Back to Wiki List</button>
      </div>
    ) : <h3>{page.title}</h3>}
  </>
}


export default Page;