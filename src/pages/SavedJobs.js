import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {svdJobs} from '../styles';

export const SavedJobs = () => {
  const savedJobs = useSelector((state) => state.savedJobs);
  const dispatch = useDispatch();

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(savedJobs));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    storeData();
    // console.log('hi')
  }, [savedJobs]);

  // console.log(savedJobs)

  const renderSavedJobs = ({item}) => {
    let date = item.created_at.split(' ');
    return (
      <View style={svdJobs.item}>
        <Image source={{uri: item.company_logo}} style={svdJobs.img} />
        <TouchableOpacity
          style={svdJobs.xmark}
          onPress={() => {
            dispatch({type: 'REMOVE_JOB', payload: {job: item}});
          }}>
          <Image
            source={require('../assets/x-mark.png')}
            style={svdJobs.xmarkImg}
          />
        </TouchableOpacity>
        <View style={svdJobs.descContainer}>
          <Text style={svdJobs.title}>
            {item.title} - {item.type}
          </Text>
          <View style={svdJobs.footer}>
            <TouchableOpacity onPress={() => Linking.openURL(item.company_url)}>
              <Text style={svdJobs.more}>Company Website</Text>
            </TouchableOpacity>
            <Text style={svdJobs.post}>{item.location}</Text>
          </View>
          <View style={svdJobs.footer}>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <Text style={svdJobs.more}>More Info</Text>
            </TouchableOpacity>
            <Text style={svdJobs.post}>
              Posted: {date[2]} {date[1]} {date[5]}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={svdJobs.container}>
      <Text style={svdJobs.heading}>Saved Job Advertisements</Text>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(item, _) => item.id}
          data={savedJobs}
          renderItem={renderSavedJobs}
        />
      </View>
    </SafeAreaView>
  );
};
