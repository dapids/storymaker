import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { stories } from 'model/reducers/stories'

const reducers = combineReducers({
  stories,
})

const middlewares = process.env.NODE_ENV === 'production'
  ? undefined
  : composeWithDevTools()

export const store = createStore(reducers, middlewares)

export default undefined
