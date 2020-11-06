import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Introduction, Jobs, SavedJobs} from './pages';
import {reducer, initialState} from './context'

const store = createStore(reducer, initialState);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroductionPage" component={Introduction} />
          <Stack.Screen name="JobsPage" component={Jobs} />
          <Stack.Screen name="SavedJobsPage" component={SavedJobs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
