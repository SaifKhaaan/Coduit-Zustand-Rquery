import React, { useState, useEffect } from 'react';

const API_URL = 'https://your-api-endpoint.com/api/articles'; // Replace with your actual API URL

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setArticles(data.articles); // Assuming response structure has articles array
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <div class="home-page">
                <div class="banner">
                    <div class="container">
                        <h1 class="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>

                <div class="container page">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="feed-toggle">
                                <ul class="nav nav-pills outline-active">
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Your Feed</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="">Global Feed</a>
                                    </li>
                                </ul>
                            </div>

                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <div class="article-preview" key={article.id}>
                                        <div class="article-meta">
                                            <a href={`/profile/${article.author.username}`}>
                                                <img src={article.author.image} alt={article.author.username} />
                                            </a>
                                            <div class="info">
                                                <a href={`/profile/${article.author.username}`} class="author">
                                                    {article.author.username}
                                                </a>
                                                <span class="date">{article.publishedDate}</span>
                                            </div>
                                            {/* ... other article details (likes, buttons) */}
                                        </div>
                                        <a href={`/article/${article.slug}`} class="preview-link">
                                            <h1>{article.title}</h1>
                                            <p>{article.description}</p>
                                            <span>Read more...</span>
                                            <ul class="tag-list">
                                                {/* ... render tags from article data */}
                                            </ul>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p>Loading articles...</p>
                            )}

                            <div class="pagination">
                                {/* ... pagination logic based on API response */}
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="sidebar">
                                <p>Popular Tags</p>

                                <div class="tag-list">
                                    {/* ... fetch or display popular tags from API/local data */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
