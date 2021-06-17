import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TopicItem = ({item, onSelect}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: `#${item.color}`}]}
      onPress={onSelect}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TopicItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 17.5,
  },
});
