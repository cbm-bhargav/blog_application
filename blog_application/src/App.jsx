import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/posts";
import Author from "./components/Author";
import postsdata from "./components/posts.json";
import Header from "./components/Header";

function App() {
    const [query, setQuery] = useState("");

    // Filter posts based on search query (title, description, tags, author)
    const filteredPosts = postsdata.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <>
            <Header onSearch={setQuery} />
            <Router>
                <Routes>
                    {/* Handle dynamic link to navigate to Author page*/}
                    <Route path="/" element={<Post posts={filteredPosts} />} />
                    <Route path="/author/:authorName" element={<Author />} />
                </Routes>
            </Router>
        </>
    );
}

export default App