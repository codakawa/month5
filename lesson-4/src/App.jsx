import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeCountDispatch, decreaseCountDispatch, increaseCountDispatch } from './store/counterReducer'
import { changeAgeDispatch, changeGenderDispatch, changeNameDispatch } from './store/formReducer'


function App() {
  const age = useSelector(state => state.form.age)
  const name = useSelector(state => state.form.name)
  const gender = useSelector(state => state.form.gender)
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const changeName = (e) => {
    dispatch(changeNameDispatch(e.target.value))
  }
  const changeAge = (e) => {
    dispatch(changeAgeDispatch(e.target.value))
  }
  const changeGender = (e) => {
    dispatch(changeGenderDispatch(e.target.value))
  }
  const increaseCount = (e) => {
    dispatch(increaseCountDispatch())
  }
  const decreaseCount = (e) => {
    dispatch(decreaseCountDispatch())
  }
  const changeCount = (e) => {
    dispatch(changeCountDispatch(e.target.value))
  }

  return (
    <>
      <input type="text" onChange={changeName} placeholder="имя"/>
      <br />
      <input type="number" onChange={changeAge} placeholder="возраст"/>
      <br />
      <span>Пол</span>
      <select name="gender" id="gender" onChange={changeGender} defaultValue="none">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <h4>Имя: {name ? name : "имя"}</h4>
      <h4>Возраст: {age ? age : "возраст"}</h4>
      <h4>Пол: {gender ? gender : "пол"}</h4>

      <h4>{count}</h4>
      <input type="number" onChange={changeCount}/>
      <br />
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

export default App
