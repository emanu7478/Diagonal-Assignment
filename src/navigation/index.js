// LIBRARIES
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
// import { useDispatch } from 'react-redux';

// STACKS
import ScreensStack from './stack';

// STYLES
import style from './style';

// App root navigator
const AppNavigator = () => {
  // const dispatch = useDispatch();
  const [loading] = useState(false);

  const componentDidMount = async () => {
    //
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  if (loading) {
    return (
      <View style={style.loaderContainer}>
        <ActivityIndicator size={30} color="#fff" />
      </View>
    );
  } else {
    return <ScreensStack />;
  }
};

export default AppNavigator;
