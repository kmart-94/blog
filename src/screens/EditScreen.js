import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function EditScreen({navigation}) {
  const id = navigation.getParam("id");
  const {editBlog, state} = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialTitle= {blogPost.title}
      initialContent={blogPost.content}
      onSubmit={(title, content) => editBlog(id, title, content, () => navigation.pop())}
    />
  );
}


export default EditScreen;
