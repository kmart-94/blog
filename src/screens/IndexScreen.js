import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogSelector from "../components/BlogSelector";
import { Feather } from '@expo/vector-icons';

function IndexScreen({navigation}) {
  const {state, deleteBlog, getBlogPosts} = useContext(BlogContext);

  //used to run some code only once
  useEffect(() => {
    getBlogPosts();

    //when addListener is called a listener is created, if it is not destroyed,
    //when this app is destroyed, then you will have a memeory leak
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    //by returning a function inside useEffect, it will only get called when IndexScreen
    //goes away permanently, (not just navigated away from)
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>

      <FlatList
        data={state}
        keyExtractor={(blogPost) => {
          return blogPost.id;
        }}
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

//used to customize our header
IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity  onPress = {() => {navigation.navigate("Create")}}>
        <Feather name="plus" style={styles.icon} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    marginRight: 10
  }
});

export default IndexScreen;
