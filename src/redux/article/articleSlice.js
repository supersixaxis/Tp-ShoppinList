// articleSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  articleList: [
    {
      id: '1',
      name: 'titre de ma tache',
      quantity: '3',
    },
    {
      id: '2',
      name: 'titre de ma panier',
      quantity: '4',
    },
  ],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      const { name, quantity } = action.payload;
      if (name !== '') {
        const newArticle = {
          id: uuidv4(),
          name,
          quantity,
        };
        state.articleList.push(newArticle);
      }
    },
    deleteArticle: (state, action) => {
      const { id } = action.payload;
      state.articleList = state.articleList.filter((article) => article.id !== id);
    },
    editArticle: (state, action) => {
      const { id, name, quantity } = action.payload;
      const article = state.articleList.find((article) => article.id === id);
      if (article) {
        article.name = name;
        article.quantity = quantity;
      }
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions;
export default articleSlice.reducer;
