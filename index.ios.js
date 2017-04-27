// import library to help create a component.

import React, {Component} from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
      <Header headerText={'albums'} />
      <AlbumList />
    </View>
  );
}

AppRegistry.registerComponent('albums', () => App);