import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from "react-native";

function BlogPostForm({initialTitle, initialContent, onSubmit}) {


  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <View>
      <Text style={styles.label}>
        Title
      </Text>
      <TextInput
        style = {styles.input}
        value = {title}
        onChangeText={(input) => {
          setTitle(input)
        }}
      />
      <Text style={styles.label}>
        Content
      </Text>
      <TextInput
        style = {styles.input}
        value = {content}
        onChangeText={(input) => {setContent(input)}}
      />
      <Button
        title="Submit"
        onPress = {() => {
          onSubmit(title, content);
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

export default BlogPostForm;
