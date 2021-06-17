import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopicItem from '../components/TopicItem';
import {introduction, jobs} from '../styles';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];

export const Introduction = props => {
  return (
    <ImageBackground
      style={introduction.back}
      source={require('../assets/back.jpg')}>
      <SafeAreaView style={introduction.container}>
        <Text style={introduction.heading}>JobSearchApp</Text>
        <Text style={introduction.desc}>Choose one of the options</Text>
        <ScrollView
          style={introduction.lang}
          horizontal
          key={(_, index) => index}
          contentContainerStyle={{alignItems: 'flex-start'}}>
          {topics.map(topic => (
            <TopicItem
              item={topic}
              key={topic.id}
              onSelect={() =>
                props.navigation.navigate('JobsPage', {
                  selectedLang: topic.name,
                })
              }
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          style={jobs.savedJobs}
          onPress={() => {
            props.navigation.navigate('SavedJobsPage');
          }}>
          <Text>Saved Jobs</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};
