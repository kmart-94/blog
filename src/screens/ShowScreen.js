import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

function ShowScreen({navigation}) {
  const id = navigation.getParam("id");
  const {state, getBlogPosts} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {

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
      <Text style={styles.title}>
        {blogPost.title}
      </Text>
      <Text style={styles.content}>
        {blogPost.content}
      </Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity  style={styles.icon} onPress = {() => { navigation.navigate("Edit", {id}) }}>
        <Feather name="edit-2" size={24} color="black" />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create(
    {
      title: {
        fontSize: 20,
        margin: 5
      },
      content: {
        fontSize: 18,
        margin: 5
      },
      icon: {
        marginRight: 10
      }
    }
);

export default ShowScreen;
