import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/DashboardScreen';
import TracksStack from '../navigation/TracksStack';
import SelfAssessmentScreen from '../screens/SelfAssessmentScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen
        name="TracksStack"
        component={TracksStack}
        options={{ title: 'Trilhas' }}
      />
      <Tab.Screen
        name="SelfAssessment"
        component={SelfAssessmentScreen}
        options={{ title: 'Autoavaliação' }}
      />
    </Tab.Navigator>
  );
}
