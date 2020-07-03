//import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
//using createDataContext, whenever we want to create a reducer, we can simply do so
//by creating a new FileNameContext.js importing the above, with a new reducer and
//functions for each action type.
//then we export {Context, Provider} from createDataContext(reducer, {an object containing each function per type, and initial state of object})


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, {title: `Blog Post #${state.length+1}`}];
    default:
    return state;
  }
}

function addBlog(dispatch) {
  return () => {
    dispatch({type: 'add'});
  }
}



export const {Context, Provider} = createDataContext(blogReducer, {addBlog}, []);
