/**
 * Created by shuaiwang on 2/23/18.
 */

import React, { Component } from 'react';
import { Text, ScrollView  } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
        // whenever component is included there will be a this.state = {}
        // initializing
        state = { albums: [] };

        componentWillMount(){
            axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState( { albums: response.data }));
        }

        renderAlbums() {
            return this.state.albums.map( album => 
                <AlbumDetail key={ album.title } albumdata = {album} />);
        }


        render(){
//            console.log( this.state );

            return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            );
        };
}




export default AlbumList;