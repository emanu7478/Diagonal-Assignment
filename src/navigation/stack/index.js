// LIBRARIES
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

// SCREEN ROUTES
import * as Screens from '../routes';

// STYLES
import * as colors from '@constants/colors';
import { Image, Platform, StyleSheet, useWindowDimensions } from 'react-native';
import RNHeaderBgd from '@components/RNHeaderBgd';

const Stack = createStackNavigator();

const ScreensStack = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      animation="fade"
    >
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={() => {
          return {
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              backgroundColor: colors.PRIMARY,
            },
            headerTitleStyle: {
              flex: 1,
            },
            headerBackground: () => <RNHeaderBgd />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreensStack;
