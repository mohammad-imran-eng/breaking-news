import React from 'react';
import { useState, useEffect } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>
            {
                articles.map((article, idx) => <News title={article.title} description={article.description} key={idx}></News>)
            }
        </div>
    );
};

export default TopHeadline;



