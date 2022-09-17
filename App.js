import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './screens/Principal';
import Secundaria from './screens/Secundaria';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Secundaria" component={Secundaria} />
    </Stack.Navigator>
  );
}

export default function Appdois() {
   return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
