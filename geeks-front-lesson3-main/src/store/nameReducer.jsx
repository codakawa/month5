// const initialState = {
//   count: 111,
//   name: 'Adil'
// }

export const nameReducer = (state={name: 'Adil'}, action) => {
    if (action.type === 'CHANGE_NAME') {
      return {...state, name: action.payload}
    }
    return state
  }
  