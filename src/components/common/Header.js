import React from 'react';
import { Text, View } from 'react-native';
//import { Text, AppRegistry } from 'react-native';
//Create a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  //styles.viewStyle
  return (
    <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
//AppRegistry.registerComponent('albums', () => App);
export { Header };
