import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // get initial state - same as through constructor
  state = { albums: []};

  componentWillMount() {
    // returns a promise
    let data = axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));

    // always modify or update using .setState(); - except in initialization.
  }

  renderAlbums() {
    console.log('map titles', this.state.albums);
    return this.state.albums.map(album =>  <AlbumDetail album={album}/>)

  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;