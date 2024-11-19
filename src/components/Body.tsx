import { useState } from 'react';
import SearchInput from './SearchInput';
import UserProfile from './User Profile'; 

const Body = () => {
    const [user, setUser ] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const handleSearch = async (username: string) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('User  not found');
            }
            const data = await response.json();
            setUser (data);
            setError('');
        } catch (err) {
            setError('User  not found or an error occurred.');
            setUser (null);
        }
    };

    return (
        <div className="container mx-auto p-7">
            <h1 className="text-2xl font-bold  mb-9">GitHub Username Search</h1>
            <SearchInput onSearch={handleSearch} />
            {error && <div className="text-red-500">{error}</div>}
            {user && <UserProfile user={user} />} {}
        </div>
    );
};

export default Body;

