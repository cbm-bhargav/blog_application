import React from "react";
import { Link } from "react-router-dom";

function Post({ posts }) {
    return (
        <div className="flex flex-row flex-wrap gap-4 m-4">
            {/* Displaying post data using map (array function)  */}
            {posts.map((post, idx) => (
                <div key={idx} className="flex flex-col bg-gray-200 gap-2 p-2 w-84 text-xl rounded-md">
                    <h1>Title: {post.title}</h1>
                    <p>Description: {post.description}</p>
                    <p>Tags: {post.tags.map(tag => `#${tag}`).join(' ')}</p>
                    <h2>
                        Author:{" "}
                        <Link
                            to={`/author/${post.author}`}
                            className="text-blue-600 underline"
                        >
                            {post.author}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Post;
