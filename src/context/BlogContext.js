import createDataContext from './createDataContext';
//using createDataContext, whenever we want to create a reducer, we can simply do so
//by creating a new FileNameContext.js importing the above, with a new reducer and
//functions for each action type.
//then we export {Context, Provider} from createDataContext(reducer, {an object containing each function per type, and initial state of object})

import jsonServer from '../api/jsonServer';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'getPosts':
      return action.payload;
    case 'delete':
      return state.filter((blogPost) => blogPost.id !== action.payload.id);
    case 'edit':
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        }
        else return blogPost;
      });
    default:
      return state;
  }
}

function getBlogPosts(dispatch) {
  return async (callback) => {
    const response = await jsonServer.get("/blogposts");
    dispatch({type: 'getPosts', payload: response.data});
  }
}

function addBlog(dispatch) {
  return  async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});

    if (callback) {
        callback();
    }
  }
}

function deleteBlog(dispatch) {
  return async (id) => {
    //both work but one is more fancy i guess
    //await jsonServer.delete('/blogposts/'+id);
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({type: 'delete', payload: {id}})
  }
}

function editBlog(dispatch) {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});
    //dispatch({type: 'edit', payload: {id, title, content}});

    if (callback) {
      callback();
    }
  }
}



export const {Context, Provider} = createDataContext(blogReducer, {addBlog, deleteBlog, editBlog, getBlogPosts}, []);
