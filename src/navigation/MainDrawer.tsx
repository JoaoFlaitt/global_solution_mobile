import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabs from '../navigation/HomeTabs';
import ProfileScreen from '../screens/ProfileScreen';
import OdsScreen from '../screens/OdsScreen';

const Drawer = createDrawerNavigator();

type MainDrawerProps = {
  onLogout: () => void;
};

export default function MainDrawer({ onLogout }: MainDrawerProps) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="SkillUpPlus"
        options={{ title: 'SkillUpPlus 2030+' }}
      >
        {(props) => <HomeTabs {...props} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Profile"
        options={{ title: 'Meu Perfil' }}
      >
        {(props) => <ProfileScreen {...props} onLogout={onLogout} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Ods"
        options={{ title: 'ODS e Futuro do Trabalho' }}
        component={OdsScreen}
      />
    </Drawer.Navigator>
  );
}
