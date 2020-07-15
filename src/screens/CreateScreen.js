import React, {useContext} from 'react';
import {} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function CreateScreen({navigation}) {
  const { addBlog } = useContext(BlogContext);

  return (
    <BlogPostForm
      initialTitle=""
      initialContent=""
      onSubmit={(title, content) => {addBlog(title, content, () => navigation.navigate("Index"))}}
    />
  );
}

export default CreateScreen;
