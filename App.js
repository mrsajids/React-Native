import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StatusBar, Text, View } from 'react-native';
import BottomTabs from './compo/BottomTabs';
import Header from './compo/Header';
import { PaperProvider } from 'react-native-paper';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('BottomTabs')}
            />
        </View>
    );
}
function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

function App() {
    const Stack = createNativeStackNavigator();

    return (<>
        <StatusBar/>
        <Header />
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    </>

    );
}

export default App;
