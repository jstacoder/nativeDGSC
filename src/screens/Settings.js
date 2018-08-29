import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Left, Icon } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons, EvilIcons } from '@expo/vector-icons'

export default class extends Component {
  render() {
    return (
      <Container>
        <Header >
            <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('Home')}>
                <EvilIcons size={30} color={'white'} name={'arrow-left'}/>
            </Button>
            </Left>
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}