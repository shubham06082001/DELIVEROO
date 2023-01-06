import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Notifications' component={Notifications} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
