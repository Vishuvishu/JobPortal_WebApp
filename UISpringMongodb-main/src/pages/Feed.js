import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/feed.css';

const Feed = () => {
    const [query, setQuery] = useState('');
    const [post, setPost] = useState([]);

    const colors = ['#15172b', '#15172b', '#15172b', '#15172b', '#15172b', '#15172b'];

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`http://localhost:8080/allPost1/${query}`);
            setPost(response.data);
        };

        const fetchInitialPosts = async () => {
            const response = await axios.get('http://localhost:8080/allPost');
            setPost(response.data);
        };

        if (query.length === 0) fetchInitialPosts();
        if (query.length > 2) fetchPosts();
    }, [query]);

    return (
        <div className="feed-container">
            <div className="header">
                <button className="home-button">
                    <Link to="/" className="home-link">Home</Link>
                </button>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid-container">
                {post && post.map((p, index) => (
                    <div key={p.id} className="card" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
                        <h2>{p.profile}</h2>
                        <p>Description: {p.desc}</p>
                        <p>Years of Experience: {p.exp} years</p>
                        <p>Skills:</p>
                        <ul>
                            {p.techs.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
