// Header.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/mettalogo.png')}
        style={styles.logo}
      />
       <Avatar.Image size={40} source={require('../assets/images/avtar.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display:'flex',
    flexDirection:'row',
    width: '100%',
    height: 70,
    backgroundColor: '#fff', // Set your background color
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft:10,
    padding:10,
    // marginTop:20,
    elevation: 4, // Adds a shadow effect
  },
  logo: {
    width: 180,
    height: 50,
  },
});

export default Header;
