import React, { Component } from 'react';
import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native';

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
  state = {
    quoteAnim: new Animated.Value(0),
    result: hardCoded[0]
  }

  render() {
    const { quoteAnim, result } = this.state;

    Animated.timing(this.state.quoteAnim, {
      toValue: 1,
      duration: 3000
    }).start();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rickyism Generator</Text>
        <Image style={styles.image} source={require('./img/main.jpg')} />
        <Button
          color="green"
          title="Generate!"
          onPress={this.generate}
        />
        <Animated.Text style={{ ...styles.quote, opacity: quoteAnim }}>{result ? `"${result}"` : ''}</Animated.Text>
      </View>
    );
  }

  generate = () => {
    const index = Math.floor((Math.random() * 7));
    this.setState({
      quoteAnim: new Animated.Value(0),
      result: hardCoded[index]
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    padding: 20
  },
  image: {
    borderRadius: 300,
    height: 300,
    width: 300
  },
  quote: {
    color: '#ccc',
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  title: {
    color: '#666',
    fontSize: 48,
    fontWeight: '200',
    textAlign: 'center'
  }
});