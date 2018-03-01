// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    //JSX = ...
    // React.createElement(
    //     Text,
    //     null,
    //     "Some Text"
    // )
    <View style = {{ flex: 1 }}>
        <Header headerText = {'Albums'} />
        <AlbumList />
    </View>
    );


// Render it to the device
// Only the 'root' component uses AppRegistry
AppRegistry.registerComponent('albums', () => App);