import { combineReducers, legacy_createStore as createStore} from 'redux'
import { counterReducer } from './counterReducer'
import { todoReducer } from './todoReducer'
// import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  todo: todoReducer,
  // counter: counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())