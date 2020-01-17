# RN-Tracking-App-Demo

General React Navigation Fix for all project:

React Navigation has changed a bit since their recent v.4.0.0 release:

https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0

We must now install three libraries separately. In the next lecture, Stephen will be running the following command:

npm install react-navigation

You will then need to also run this command in your terminal to install the missing libraries:

npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack@1.10.3 react-navigation-tabs

Our imports in the upcoming lecture "Navigator Hookup" will now look like this:

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
