import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

function ShowScreen({navigation}) {
  const id = navigation.getParam("id");
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

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

const styles = StyleSheet.create(
    {
      title: {
        fontSize: 20,
        margin: 5
      },
      content: {
        fontSize: 18,
        margin: 5
      }
    }
);

export default ShowScreen;
