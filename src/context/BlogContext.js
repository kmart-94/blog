//import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
//using createDataContext, whenever we want to create a reducer, we can simply do so
//by creating a new FileNameContext.js importing the above, with a new reducer and
//functions for each action type.
//then we export {Context, Provider} from createDataContext(reducer, {an object containing each function per type, and initial state of object})


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.floor(Math.random()* 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
}

function addBlog(dispatch) {
  return  (title, content, callback) => {
    dispatch({type: 'add', payload: {title, content}});
    callback();
  }
}

function deleteBlog(dispatch) {
  return (id) => {
    dispatch({type: 'delete', payload: id})
  }
}



export const {Context, Provider} = createDataContext(blogReducer, {addBlog, deleteBlog}, []);
