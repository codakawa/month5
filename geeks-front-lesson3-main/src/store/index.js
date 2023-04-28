import { legacy_createStore as createStore, combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { nameReducer } from './nameReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    name: nameReducer,
    counter: counterReducer
  })

export default store = createStore(rootReducer)

  