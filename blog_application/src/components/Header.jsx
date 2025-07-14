import React, { useState } from "react";

function Header({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="flex items-center justify-between p-3 bg-gray-300 m-2">
            <h1 className="text-2xl font-bold">Blog Application</h1>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search blogs..."
                className="p-2 rounded-md w-64 border border-black-700"
            />
        </header>
    );
}

export default Header