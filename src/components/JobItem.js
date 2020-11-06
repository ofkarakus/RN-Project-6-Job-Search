import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const JobItem = ({job, onSelect}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelect(job);
      }}>
      <Text style={styles.text}>{job.title}</Text>
      <Text>
        {job.type} / {job.location}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffcdd2',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
  },
  text: {
    color: '#212121',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    marginBottom: 7,
    paddingBottom: 3
  },
});
