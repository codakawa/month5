export const addTodoDispatch = (payload) => ({type: "ADD_TODO", payload})
// export const changeAgeDispatch = (payload) => ({type: "CHANGE_AGE", payload})
// export const changeGenderDispatch = (payload) => ({type: "CHANGE_GENDER", payload})

export const todoReducer = (state={
  todo: []
}, action) => {
    if(action.type === "ADD_TODO") {
      return {
        ...state,
        todo: [...state.todo, action.payload]
      }
    } 
    return state
    // else if(action.type === "CHANGE_AGE") {
    //   return {
    //     ...state,
    //     age: action.payload
    //   }
    // } else if(action.type === "CHANGE_GENDER") {
    //   return {
    //     ...state, 
    //     gender: action.payload
    //   }
    // } else {
      // }
  }
  