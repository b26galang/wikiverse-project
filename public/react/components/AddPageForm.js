import { useState } from 'react';

function AddPageForm({ setIsAddingArticle }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tags, setTags] = useState("");

    handleSubmit = async (event) => {
        event.preventDefault();
        const articleData = {
            title,
            content,
            name,
            email,
            tags
        }

        try {
            await fetch('http://localhost:3000/api/wiki', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    articleData
                )
            });
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }

        setIsAddingArticle(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
                <input
                    placeholder="Article Content"
                    type="text"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value)
                    }}
                />
                <input
                    placeholder="Author Name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <input
                    placeholder="Author Email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <input
                    placeholder="Tags"
                    type="tags"
                    value={tags}
                    onChange={(event) => {
                        setTags(event.target.value)
                    }}>
                </input>
                <button type="submit">Create Page</button>
            </form>
        </>
    )
}

export default AddPageForm;