import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

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
      result: hardCoded[0]
    };
  }

  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rickyism Generator</Text>
        <Image style={styles.image} source={require('./img/main.jpg')} />
        <Button
          color="green"
          title="Generate!"
          onPress={this.generate}
        />
        <Text style={styles.quote}>{result ? `"${result}"` : ''}</Text>
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
    fontSize: 48,
    fontWeight: '200',
    textAlign: 'center'
  }
});