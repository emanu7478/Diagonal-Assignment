// LIBRARIES
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// SCREEN ROUTES
import * as Screens from '../routes';

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
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default ScreensStack;
