import {StyleSheet, Dimensions} from 'react-native';

export const introduction = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    color: 'red',
  },
  desc: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 30,
  },
  lang: {
    padding: 15,
    margin: 10,
  },
  back: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export const jobs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  heading: {
    color: '#f44336',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 20,
    marginBottom: 10,
  },
  modalBackground: {
    backgroundColor: '#f3e5f5',
    borderRadius: 10,
    padding: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jobDesc: {
    height: Dimensions.get('window').height / 2,
    marginBottom: 8,
  },
  btn: {
    width: '35%',
    backgroundColor: '#2196f3',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 3,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  savedJobs: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#81c784',
    padding: 5,
    borderRadius: 5,
  },
});

export const svdJobs = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  xmark: {
    position :'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  xmarkImg: {
    width: 20,
    height: 20,
    tintColor: 'red'
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    height: Dimensions.get('window').height / 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.85,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    overflow: 'visible'
  },
  img: {
    resizeMode: 'contain',
    width: '70%',
    height: '60%',
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  post: {
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  more: {
    fontSize: 12,
    color: 'blue',
  },
  descContainer: {
    marginHorizontal: 15,
    marginVertical: 5,
    alignSelf: 'stretch',
  },
});
