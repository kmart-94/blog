import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";

function CreateScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlog} = useContext(BlogContext);
  return (
    <View>
      <Text style={styles.label}>
        Enter Title:
      </Text>
      <TextInput
        style = {styles.input}
        value = {title}
        onChangeText={(input) => {
          setTitle(input)
        }}
      />
      <Text style={styles.label}>
        Enter Content:
      </Text>
      <TextInput
        style = {styles.input}
        value = {content}
        onChangeText={(input) => {setContent(input)}}
      />
      <Button
        title="Submit"
        onPress = {() => {
          addBlog(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: 'black',
    margin: 5
  },
  label: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 5
  }
});

export default CreateScreen;
