import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {JobItem} from '../components';
import {jobs} from '../styles';
import {useDispatch, useSelector} from 'react-redux';

export const Jobs = (props) => {
  const {selectedLang} = props.route.params;
  const [jobList, setJobList] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const dispatch = useDispatch();
  const savedJobs = useSelector((state) => state.savedJobs);

  const getData = async () => {
    const response = await AsyncStorage.getItem('@SAVED_JOBS');
    if (response) {
      const res = await JSON.parse(response);
      dispatch({type: 'LOAD_DATA', payload: {data: res}});
    }
  };

  const fetchData = async () => {
    const response = await axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLang.toLowerCase()}`,
    );
    setJobList(response.data);
  };

  useEffect(() => {
    fetchData();
    getData();
  }, []);

  function renderJobs({item}) {
    return (
      <JobItem
        job={item}
        onSelect={(value) => {
          setSelectedJob(value);
          setModalFlag(true);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={jobs.container}>
      <Text style={jobs.heading}>Jobs For {selectedLang}</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={jobList}
        renderItem={renderJobs}
      />

      <TouchableOpacity
        style={jobs.savedJobs}
        onPress={() => {
          props.navigation.navigate('SavedJobsPage');
        }}>
        <Text>Saved Jobs</Text>
      </TouchableOpacity>

      <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
        <View style={jobs.modalBackground}>
          <View style={{borderBottomWidth: 1, paddingBottom: 5}}>
            <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
            <Text>
              Location: {selectedJob.location} - Company: {selectedJob.company}
            </Text>
          </View>
          <View style={jobs.jobDesc}>
            <WebView source={{html: selectedJob.description}} />
          </View>

          {savedJobs.findIndex((item) => selectedJob.id == item.id) == -1 ? (
            <TouchableOpacity
              style={jobs.btn}
              onPress={() => {
                dispatch({type: 'ADD_JOB', payload: {job: selectedJob}});
              }}>
              <Text style={jobs.btnText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={jobs.btn}
              onPress={() => {
                dispatch({type: 'REMOVE_JOB', payload: {job: selectedJob}});
              }}>
              <Text style={jobs.btnText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
};
