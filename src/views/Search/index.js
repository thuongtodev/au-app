import React from 'react';
import { View, Text } from 'react-native';

class SearchScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => this.props.navigation.goBack()}>Search screen</Text>
      </View>
    );
  }
}

export default SearchScreen;
