import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux"
import { commentsReducer } from "./commentsReducer"
import { postReducer } from "./postsReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))