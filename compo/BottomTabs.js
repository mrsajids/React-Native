import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({navigation, route, options}) {
  React.useEffect(()=>console.log(navigation, route, options),[])
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen1({navigation, route, options}) {
  React.useEffect(()=>console.log(navigation, route, options),[])
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Settingsc" component={SettingsScreen1} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}