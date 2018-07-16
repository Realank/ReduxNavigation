
import NavigationStack from './navigationStack'
import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
// action type
export const ACTION_NEXT = 'NEXT'
// action creator
export const goNext = () => ({
  type: ACTION_NEXT
})

const ActionForFirstPage = NavigationStack.router.getActionForPathAndParams(
  'screen1'
)

const ActionForSecondPage = NavigationStack.router.getActionForPathAndParams(
  'screen2'
)
const initialState = NavigationStack.router.getStateForAction(ActionForFirstPage)

const nav = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NEXT: {
      return NavigationStack.router.getStateForAction(ActionForSecondPage, state)
    }
  }
  return state
}

const reducers = combineReducers({nav})

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const configureStore = preloadedState => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(middleware, createLogger)
    )
  )
}

export const store = configureStore()