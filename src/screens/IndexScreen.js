import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import BlogSelector from "../components/BlogSelector";
import { Feather } from '@expo/vector-icons';

function IndexScreen({navigation}) {
  const {state, deleteBlog} = useContext(BlogContext);

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
