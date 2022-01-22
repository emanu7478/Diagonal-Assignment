// LIBRARIES
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// SCREEN ROUTES
import * as Screens from '../routes';

// STYLES
import * as colors from '@constants/colors';

const Stack = createStackNavigator();

const ScreensStack = () => {
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
              color: colors.WHITE,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreensStack;
