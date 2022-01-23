/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
// LIBRARIES
import { fetchShows } from '@redux/shows/actions';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';

// STACKS
import ScreensStack from './stack';

// STYLES
import * as colors from '@constants/colors';
import style from './style';

// App root navigator
const AppNavigator = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const componentDidMount = () => {
    dispatch(fetchShows()).then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  if (loading) {
    return (
      <View style={style.loaderContainer}>
        <ActivityIndicator size={30} color={colors.WHITE} />
      </View>
    );
  } else {
    return <ScreensStack />;
  }
};

export default AppNavigator;
