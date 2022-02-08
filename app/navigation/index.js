import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './../container/Splash';
import SpaceDetailView from './../container/SpaceDetailView';
import HomeScreen from './../container/HomeScreen';
import {SafeAreaView} from "react-native";
import { navigationRef } from './NavigationService';
const Stack = createStackNavigator();

class AppStack extends React.Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName={'Splash'}>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                    headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SpaceDetail"
                    component={SpaceDetailView}
                    options={{
                    headerShown: false,
                    }}
                />
            </Stack.Navigator>
        );
    }
}

class AppNavigator extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <NavigationContainer ref={navigationRef}>
                    <AppStack/>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
};

export default AppNavigator;
