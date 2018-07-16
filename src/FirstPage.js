/**
 * desc：
 * author：
 * date：
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {goNext} from './store'
import { connect } from 'react-redux'

class FirstPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Redux Navigation!</Text>
        <TouchableOpacity onPress={() => { this.props.goNext() }}><Text style={styles.button}>Next</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  button: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#448bff'
  }
})

const mapDispatchToProps = {
  goNext
}

export default connect(null, mapDispatchToProps)(FirstPage)
