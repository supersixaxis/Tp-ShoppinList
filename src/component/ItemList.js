import React from 'react';
import Article from './Article';
import { useSelector } from 'react-redux';

function ItemList() {
  const articleList = useSelector((state) => state.article.articleList);

  return (
    <div>
      <h4>Liste des articles</h4>
      {articleList.slice().map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
}

export default ItemList;