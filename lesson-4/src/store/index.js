import { combineReducers, legacy_createStore as createStore} from 'redux'
import { counterReducer } from './counterReducer'
import { formReducer } from './formReducer'
// import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
  form: formReducer,
  counter: counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())