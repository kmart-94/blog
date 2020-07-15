import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';//expo vector icon

function BlogSelector({navigation, id, title, deleteBlog}) {
  return (
    <TouchableOpacity onPress = {() => {navigation.navigate("Show", {id})}}>
      <View style={styles.row}>
        <Text style={styles.title}>
          {title} - {id}
        </Text>
        <TouchableOpacity onPress={() => {deleteBlog(id)} }>
          <Feather name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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

export default BlogSelector;
