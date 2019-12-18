import React from 'react';
import { View, Text } from 'react-native';

import { NavigationRoutes } from '../../navigator/Routes';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.navigate(NavigationRoutes.IdealFigure)}>Home screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
