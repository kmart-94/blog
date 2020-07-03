import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';//expo vector icon

function IndexScreen() {
  const {state, addBlog, deleteBlog} = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress= {() => addBlog()} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => {deleteBlog(item.id)} }>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
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
