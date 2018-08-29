import React from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base'

import { Container } from '../components'


export default class extends React.Component {
  render() {
    return (
      <Container>
             <Text>Open up src/App.js to start working on your app!</Text>   
             <Text>Changes you make will automatically reload.</Text>
             <Text>Shake your phone to open the developer menu.</Text>
             <Button onPress={() => this.props.navigation.navigate('Settings')}><Text>Push me</Text></Button>
         </Container>
    );
  }
}
