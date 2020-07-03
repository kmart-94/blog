import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
    return state;
  }
}

export const BlogProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [
    {title: 'Blog Post #1'},
    {title: 'Blog Post #2'}
  ])
  /*const [blogPosts, setBlogPosts] = useState([
    {title: 'Blog Post #1'},
    {title: 'Blog Post #2'}
  ]);*/

  /*function addPost() {
    setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
  }*/

  return (
    <BlogContext.Provider value={{posts: blogPosts, dispatch: dispatch}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
