import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function App() {
  const age = useSelector(state => state.age)
  const name = useSelector(state => state.name)
  const gender = useSelector(state => state.gender)
  const dispatch = useDispatch()

  const changeName = (e) => {
    dispatch({type: "CHANGE_NAME", payload: e.target.value})
  }
  const changeAge = (e) => {
    dispatch({type: "CHANGE_AGE", payload: e.target.value})
  }
  const changeGender = (e) => {
    dispatch({type: "CHANGE_GENDER", payload: e.target.value})
  }

  return (
    <>
      <input type="text" onChange={changeName} placeholder="имя"/>
      <br />
      <input type="number" onChange={changeAge} placeholder="возраст"/>
      <br />
      <span>Пол</span>
      <select name="gender" id="gender" onChange={changeGender}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <h4>Имя: {name}</h4>
      <h4>Возраст: {age}</h4>
      <h4>Пол: {gender}</h4>
    </>
  )
}

export default App
