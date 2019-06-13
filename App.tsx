import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const hardCoded = [
  'Gotta learn stuff through denial and error',
  'And why do you look like Indianapolis Jones?',
  'I feel like my brain is short circulating',
  'A link is only as long as your longest strong chain',
  'Beauty is in the eye when you hold her',
  'Don\'t judge a cover of a book by its look',
  'Friends with benedict'
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rickyism Generator</Text>
        <Button
          onPress={this.generate}
          title="Generate!"
        />
        <Text>{this.state.result || ""}</Text>
      </View>
    );
  }

  generate = () => {
    const index = Math.floor((Math.random() * 7));
    this.setState({ result: hardCoded[index] })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});