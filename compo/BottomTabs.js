import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FindYourCommunityScreen from './community/FindYourCommunityScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


function MyNetworkScreen({ navigation, route, options }) {
  // React.useEffect(() => console.log(navigation, route, options), [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ChatScreen({ navigation, route, options }) {
  // React.useEffect(() => console.log(navigation, route, options), [])

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
      <Tab.Screen name="Findyourcommunity" initialRouteName="Home" component={FindYourCommunityScreen} options={{
        tabBarLabel: 'Find Community',
          headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="explore" color={color} size={size} />
        ),

      }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
          headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Mynetwork" component={MyNetworkScreen} options={{
        tabBarLabel: 'My Network',
          headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people" color={color} size={size} />
        ),
      }} />

      <Tab.Screen name="Yourchat" component={ChatScreen} options={{
        tabBarLabel: 'Chats',
          headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble-sharp" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }} />
      {/* <Tab.Screen name="My Network" component={SettingsScreen} />
        <Tab.Screen name="Settingsc" component={SettingsScreen1} /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
}