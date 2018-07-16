/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { NavigationActions } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import { BackHandler } from 'react-native'
import { connect, Provider } from 'react-redux'
import { store } from './store'
import NavigationStack from './navigationStack'

// class AppNavigation extends Component {
//   componentDidMount () {
//     BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
//   }
//
//   componentWillUnmount () {
//     BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
//   }
//
//   onBackPress = () => {
//     const { dispatch, navigationState } = this.props
//     if (navigationState.stateForLoggedIn.index <= 1) {
//       BackHandler.exitApp()
//       return
//     }
//     dispatch(NavigationActions.back())
//     return true
//   };
//
//   render () {
//     const {navigationState, dispatch} = this.props
//     return (
//       <NavigationStack navigation={addNavigationHelpers({dispatch, state: navigationState})} />
//     )
//   }
// }

const AppNavigation = reduxifyNavigator(NavigationStack, 'root')

const mapStateToProps = state => {
  return {
    state: state.nav
  }
}

const HighOrderAppNavigation = connect(mapStateToProps)(AppNavigation)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HighOrderAppNavigation />
      </Provider>
    )
  }
}
