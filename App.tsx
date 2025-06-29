import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import AdminDashboard from './Screens/AdminDashboard';
import PatientDashboard from './Screens/PatientDashboard';
import DoctorDashboard from './Screens/DoctorDashboard';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="AdminDashboard">
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={{ title: 'Admin Dashboard' }}
          />
          <Stack.Screen
            name="PatientDashboard"
            component={PatientDashboard}
            options={{ title: 'Patient Dashboard' }}
          />
          <Stack.Screen
            name="DoctorDashboard"
            component={DoctorDashboard}
            options={{ title: 'Doctor Dashboard' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
