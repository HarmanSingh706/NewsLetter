import React from 'react';
import { Header } from 'react-native-elements';
const AppHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#554411', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = '#BBEE77'
    />
  );
};

export default AppHeader;