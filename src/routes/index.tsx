import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312a38' },
    }}
  >
    <Auth.Screen component={SignIn} name="SignIn" />
    <Auth.Screen component={SignOut} name="SignOut" />
  </Auth.Navigator>
);

export default AuthRoutes;
