// LIBRARIES
import React, { useLayoutEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RNStatusBar from '@components/RNStatusbar';
import ShowLayout from '@components/ShowLayout';

// REDUX
import { getShows } from '@redux/reduxSelectors';

// STYLE
import style from './style';
import { fetchShows } from '@redux/shows/actions';
import RNHeaderLeft from '@components/RNHeaderLeft';
import HeaderSearchBar from '@components/HeaderSearchBar';

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shows = useSelector((state) => getShows(state));
  const [searchString, setSearchString] = useState('');

  const onEndPointReached = () => {
    dispatch(fetchShows());
  };

  const filteredData = searchString ? shows?.filter((x) => x.name.toLowerCase().includes(searchString.toLowerCase())) : shows;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <RNHeaderLeft title={'Romantic Comedy'} />,
      headerRight: () => <HeaderSearchBar value={searchString} onChangeText={(text) => setSearchString(text)} />,
    });
  }, [navigation, searchString]);

  const renderShows = (item) => {
    return <ShowLayout title={item?.item?.name} image={item?.item?.poster_image} />;
  };

  return (
    <View style={style.container}>
      <RNStatusBar />
      <View style={style.dataContainer}>
        <FlatList
          data={filteredData}
          numColumns={3}
          renderItem={renderShows}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index?.toString()}
          onEndReached={onEndPointReached}
          onEndReachedThreshold={0.3}
          // Performance settings
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={10} // Reduce initial render amount
        />
      </View>
    </View>
  );
}

export default Home;
