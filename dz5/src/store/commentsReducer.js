import axios from "axios"

export const changeCommentsDispatch = (payload) => ({type: "CHANGE_CURRENT_COMMENTS", payload})

export const commentsReducer = (state={
    currentComments: null
}, action) => {
    if(action.type === "CHANGE_CURRENT_COMMENTS") {
        return {
            currentComments: action.payload
        }
    }
    return state
}

export const fetchComments = (URL) => {
    return dispatch => {
        axios.get(URL).then(resp => 
            dispatch(changeCommentsDispatch(resp.data))
        )
    }
}