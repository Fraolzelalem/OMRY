interface UserProfileProps {
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
        public_repos: number;
    } | null;
}

const UserProfile = ({ user }: UserProfileProps) => {
    if (!user) return <div>No user found</div>;

    return (
        <div className="flex items-center border p-4 rounded-md bg-white shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div className="ml-4">
                <h2 className="text-xl font-bold">{user.login}</h2>
                <p>Public Repos: {user.public_repos}</p>
                <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-yellow-600 underline"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
};

export default UserProfile; 
