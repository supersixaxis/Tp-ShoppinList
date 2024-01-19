import React, { useState } from 'react';
import { deleteArticle, editArticle } from '../redux/article/articleSlice';
import { store } from '../redux/Store'
function Article({ article }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(article.name);
  const [editedQuantity, setEditedQuantity] = useState(article.quantity);


  const handleDelete = () => {
    store.dispatch(deleteArticle({ id: article.id }));
  };

  const handleEdit = () => {
    store.dispatch(editArticle({ id: article.id, name: editedName, quantity: editedQuantity }));
    setEditMode(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-warning btn-sm" onClick={() => setEditMode(!editMode)}>
        Edit
      </button>
      {editMode ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="number"
            className="ms-2"
            onChange={(e) => setEditedQuantity(e.target.value)}
            value={editedQuantity}
          />
          <input type="text" onChange={(e) => setEditedName(e.target.value)} value={editedName} />
          <button className="btn btn-success btn-sm" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <p className="ms-5">
          {article.quantity} {article.name}
        </p>
      )}
    </div>
  );
}

export default Article;