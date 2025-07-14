import React from "react";
import { useParams } from "react-router-dom";
import postsdata from "./posts.json";

function Author() {
    const { authorName } = useParams();
    // Decode in case authorName is URL encoded
    const decodeAuthor = decodeURIComponent(authorName);

    // Filter posts by author
    const authorPosts = postsdata.filter(
        post => post.author.toLowerCase() === decodeAuthor.toLowerCase()
    );

    return (
        <div className="m-4 p-4 bg-gray-100 rounded">
            <h1 className="text-2xl font-bold mb-4">Author: {decodeAuthor}</h1>
            {authorPosts.length === 0 ? (
                <p>No posts found for this author.</p>
            ) : (
                authorPosts.map((post, idx) => (
                    <div key={idx} className="mb-6 p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Title: {post.title}</h2>
                        <p>Description: {post.description}</p>
                        <p>Tags: {post.tags.map(tag => `#${tag}`).join(' ')}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Author