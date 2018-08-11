import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { stories } from 'model/reducers/stories'

const reducers = combineReducers({
  stories,
})

export const store = createStore(reducers, composeWithDevTools())

export default undefined
