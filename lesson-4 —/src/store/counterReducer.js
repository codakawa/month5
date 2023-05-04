export const increaseCountDispatch = () => ({type: "INCREASE_COUNT"})
export const decreaseCountDispatch = () => ({type: "DECREASE_COUNT"})
export const changeCountDispatch = (payload) => ({type: "CHANGE_COUNT", payload})

export const counterReducer = (state={
  count: 0
}, action) => {
    if(action.type === "INCREASE_COUNT") {
      return {
        ...state,
        count: state.count+1
      }
    } else if(action.type === "DECREASE_COUNT") {
      return {
        ...state,
        count: state.count-1
      }
    } else if(action.type === "CHANGE_COUNT") {
      return {
        ...state,
        count: Number(action.payload)
      }
    } else {
      return state
    }
  }
  