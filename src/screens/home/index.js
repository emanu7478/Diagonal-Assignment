// LIBRARIES
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import RNStatusBar from '@components/RNStatusbar';
import ShowLayout from '@components/ShowLayout';
import SearchBarHeader from '@components/SearchBarHeader';

// REDUX
import { fetchShows } from '@redux/shows/actions';
import { getHeaderTitle, getShows } from '@redux/reduxSelectors';

// STYLE
import style from './style';

function Home() {
  const dispatch = useDispatch();
  const shows = useSelector((state) => getShows(state));
  const headerTitle = useSelector((state) => getHeaderTitle(state));
  const [searchString, setSearchString] = useState('');

  const onEndPointReached = () => {
    dispatch(fetchShows());
  };

  const filteredData = searchString ? shows?.filter((x) => x.name.toLowerCase().includes(searchString.toLowerCase())) : shows;

  const renderShows = (item) => {
    return <ShowLayout title={item?.item?.name} image={item?.item?.poster_image} />;
  };

  return (
    <View style={style.container}>
      <RNStatusBar />
      <SearchBarHeader headerTitle={headerTitle} value={searchString} onChangeText={(text) => setSearchString(text)} />
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
