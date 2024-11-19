import { useState } from 'react';

interface SearchInputProps {
    onSearch: (username: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        if (username.trim()) {
            onSearch(username.trim());
            setUsername('');
        }
    };

    return (
        <div className="flex mb-4">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-4 rounded-l-md"
                placeholder="Enter GitHub username"
            />
            <button onClick={handleSearch} className="bg-yellow-600 text-white p-2 rounded-r-md">
                Search
            </button>
        </div>
    );
};

export default SearchInput; 

