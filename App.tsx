import React, { useEffect } from 'react';
import { StatusBar, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ChapterScreen from './src/screens/ChapterScreen';
import TriviaScreen from './src/screens/TriviaScreen';

import {
  initMusic,
  resumeMusicOnForeground,
  pauseMusicOnBackground,
} from './src/utils/music';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#0d0d1a' },
};

function App() {
  useEffect(() => {
    initMusic();
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (nextAppState === 'active') {
        await resumeMusicOnForeground();
      } else if (nextAppState === 'background' || nextAppState === 'inactive') {
        await pauseMusicOnBackground();
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0d0d1a" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Chapter" component={ChapterScreen} />
          <Stack.Screen name="Trivia" component={TriviaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
