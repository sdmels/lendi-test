import React, { useState, useEffect } from 'react';
import Article from './Article';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const List = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(API_URL).then((res) => res.json());
      // hydrate(result);
      setArticles(result);
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  const handleClick = (id) => setSelected(id);

  if (loading === true) {
    return <p>Loading...</p>;
  } else if (articles === null || articles.length === 0) {
    return null;
  }
  let articlesForRendering = articles;
  if (articles.length > 10) {
    articlesForRendering = articles.splice(0, 10).sort();
  }
  /* TODO: Limit to the first 10 and order the articles alphabetically. */

  return (
    <main>
      <h2>Articles list:</h2>
      {articlesForRendering.map((article) => (
        <Article
          key={article.id}
          {...article}
          isSelected={article.id === selected}
          onClick={handleClick}
        />
      ))}
    </main>
  );
};

export default List;
