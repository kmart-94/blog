import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, Button} from "react-native";
import BlogContext from "../context/BlogContext";

function IndexScreen() {
  const blogData = useContext(BlogContext);
  const {posts, dispatch} = blogData;

  return (
    <View>
      <Text>
        Index Screen
      </Text>
      <Button title="Add Post" onPress= {() => dispatch({type: 'add', payload: {title: `Blog Post #${posts.length + 1}`} })} />
      <FlatList
        data={posts}
       keyExtractor={(blogPost) => blogPost.title}
       renderItem={({item}) => {
         return <Text>{item.title}</Text>;
       }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default IndexScreen;
