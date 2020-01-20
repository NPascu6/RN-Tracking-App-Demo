import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { Provider as AuthentificationProvider } from './src/context/AuthentificationContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/helpers/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <LocationProvider>
            <AuthentificationProvider>
                <App ref={(navigator) => { setNavigator(navigator) }} />
            </AuthentificationProvider>
        </LocationProvider>
    )
}