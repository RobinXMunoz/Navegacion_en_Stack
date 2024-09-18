import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

const Stack = createStackNavigator();

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen 2 as Admin"
        onPress={() => navigation.navigate('Screen2', { isAdmin: true })} 
      />
      <Button
        title="Go to Screen 2 as User"
        onPress={() => navigation.navigate('Screen2', { isAdmin: false })} 
      />
    </View>
  );
};

const Screen2 = ({ navigation, route }) => {
  const { isAdmin } = route.params; 

  if (isAdmin) {
    return (
      <View>
        <Text>Welcome, Admin!</Text>
        <Button
          title="Go to Admin Dashboard"
          onPress={() => navigation.navigate('AdminDashboard')} 
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Welcome, User!</Text>
        <Button
          title="Go to User Dashboard"
          onPress={() => navigation.navigate('UserDashboard')} 
        />
      </View>
    );
  }
};

const AdminDashboard = () => (
  <View>
    <Text>Admin Dashboard</Text>
  </View>
);

const UserDashboard = () => (
  <View>
    <Text>User Dashboard</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
