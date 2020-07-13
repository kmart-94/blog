import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogSelector from "../components/BlogSelector";

function IndexScreen({navigation}) {
  const {state, addBlog, deleteBlog} = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress= {() => addBlog()} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return (
              <BlogSelector
                navigation={navigation}
                id={item.id}
                title={item.title}
                deleteBlog={deleteBlog}
              />
            
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderTopWidth: 0
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
