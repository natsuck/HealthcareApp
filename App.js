import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Import screens
import AdminDashboard from './Screens/AdminDashboard';
import PatientDashboard from './Screens/PatientDashboard';
import DoctorDashboard from './Screens/DoctorDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
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
