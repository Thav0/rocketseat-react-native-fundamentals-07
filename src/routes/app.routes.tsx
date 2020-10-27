import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentCreated from '../pages/AppointmentCreated';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312a38' },
    }}
  >
    <App.Screen component={Dashboard} name="Dashboard" />
    <App.Screen component={CreateAppointment} name="CreateAppointment" />
    <App.Screen component={AppointmentCreated} name="AppointmentCreated" />

    <App.Screen component={Profile} name="Profile" />
  </App.Navigator>
);

export default AppRoutes;
