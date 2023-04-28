export const counterReducer = (state={count: 1}, action) => {
    if (action.type === 'INCREASE_COUNT') {
      // state = {count: 2}
      // return state
      // return {count: state.count+1}
      return {...state, count: state.count+1}
    } else {
      return state
    }
  }