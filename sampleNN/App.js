/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';

import {Drawer, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <Container>
      <Header>
        <Text>
          sadajkdhas
        </Text>
      </Header>
      <Content />
      <Footer>
        <FooterTab>
          <Button active style={styles.container.noBrd}>
            <Text>Apps</Text>
          </Button>
          <Button>
            <Text>Camera</Text>
          </Button>
          <Button >
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  noBrd: {
    borderRadius:0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
