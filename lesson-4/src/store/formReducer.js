export const changeNameDispatch = (payload) => ({type: "CHANGE_NAME", payload})
export const changeAgeDispatch = (payload) => ({type: "CHANGE_AGE", payload})
export const changeGenderDispatch = (payload) => ({type: "CHANGE_GENDER", payload})

export const formReducer = (state={
  name: "",
  age: 0,
  gender: ""
}, action) => {
    if(action.type === "CHANGE_NAME") {
      return {
        ...state,
        name: action.payload
      }
    } else if(action.type === "CHANGE_AGE") {
      return {
        ...state,
        age: action.payload
      }
    } else if(action.type === "CHANGE_GENDER") {
      return {
        ...state, 
        gender: action.payload
      }
    } else {
      return state
    }
  }
  