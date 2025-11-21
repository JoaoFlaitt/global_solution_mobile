import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TracksScreen from '../screens/TracksScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createNativeStackNavigator();

export default function TracksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tracks"
        component={TracksScreen}
        options={{ title: 'Trilhas de Aprendizado' }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{ title: 'Detalhes da Trilha' }}
      />
    </Stack.Navigator>
  );
}
